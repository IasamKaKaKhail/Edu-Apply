import {
  ActivePageAgents,
  CREATE_AGENT,
  DELETE_AGENT_BY_ID,
  EDIT_AGENT,
  GET_AGENTS,
  QueryFilterAgents,
  queryFilterInitial,
} from "@/graphql";
import {
  CreateAgentData,
  Mutation,
  MutationCreateAgentArgs,
  MutationDeleteAgentByIdArgs,
  MutationEditAgentArgs,
} from "@/graphql/__generatedTypes__";
import { useMutation, useReactiveVar } from "@apollo/client";
import { useSnackbar } from "notistack";
const useAgent = () => {
  const activePage = useReactiveVar(ActivePageAgents);
  const queryFilter = useReactiveVar(QueryFilterAgents);
  const { enqueueSnackbar } = useSnackbar();

  const [editAgentMutation] = useMutation<Mutation, MutationEditAgentArgs>(
    EDIT_AGENT,
  );

  const [createAgentMutation] = useMutation<Mutation, MutationCreateAgentArgs>(
    CREATE_AGENT,
    {
      refetchQueries: [
        {
          query: GET_AGENTS,
          variables: {
            count: 10,
            offset: 0,
            filter: queryFilterInitial,
          },
        },
      ],
      onCompleted() {
        ActivePageAgents(0);
        QueryFilterAgents(queryFilterInitial);
      },
    },
  );
  const [deleteAgentMutation] = useMutation<
    Mutation,
    MutationDeleteAgentByIdArgs
  >(DELETE_AGENT_BY_ID, {
    refetchQueries: [
      {
        query: GET_AGENTS,
        variables: {
          count: 10,
          offset: activePage,
          filter: queryFilter,
        },
      },
    ],
  });

  const createAgent = async (data: CreateAgentData) => {
    try {
      const res = await createAgentMutation({
        variables: { createAgentData: data },
      });
      if (res.data?.createAgent) return res.data?.createAgent;
    } catch (error: any) {
      console.error(error);
      enqueueSnackbar(`${error?.message}`, { variant: "error" });
      throw error;
    }
  };

  const deleteAgentbyId = async (variables: MutationDeleteAgentByIdArgs) => {
    try {
      const res = await deleteAgentMutation({
        variables,
        update(cache) {
          cache.evict({ id: `AgentData:${variables.agentId}` });
        },
      });
      if (res.data?.deleteAgentById.success)
        return res.data?.deleteAgentById.success;
    } catch (error: any) {
      console.error(error);
      enqueueSnackbar(`${error?.message}`, { variant: "error" });
      throw error;
    }
  };

  const editAgent = async (variables: MutationEditAgentArgs) => {
    try {
      const res = await editAgentMutation({
        variables,
      });
      if (res.data?.editAgent) return res.data?.editAgent;
    } catch (error: any) {
      console.error(error);
      enqueueSnackbar(`${error?.message}`, { variant: "error" });
      throw error;
    }
  };

  return { createAgent, deleteAgentbyId, editAgent };
};
export default useAgent;
