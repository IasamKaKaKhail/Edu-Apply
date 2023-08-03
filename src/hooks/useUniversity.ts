import {
  ActivePageUniversity,
  CREATE_UNIVERSITY,
  DELETE_UNI_BY_ID,
  EDIT_UNIVERSITY,
  GET_UNIVERSITIES,
  queryFilterInitial,
  QueryFilterUni,
} from "@/graphql";
import {
  CreateUniversityData,
  Mutation,
  MutationCreateUniversityArgs,
  MutationDeleteUniversityByIdArgs,
  MutationEditUniArgs,
} from "@/graphql/__generatedTypes__";
import { useMutation, useReactiveVar } from "@apollo/client";
import { useSnackbar } from "notistack";

const useUniversity = () => {
  const activePage = useReactiveVar(ActivePageUniversity);
  const queryFilterUni = useReactiveVar(QueryFilterUni);
  const { enqueueSnackbar } = useSnackbar();

  const [editUniMutation] = useMutation<Mutation, MutationEditUniArgs>(
    EDIT_UNIVERSITY,
  );

  const [createUniversityMutation] = useMutation<
    Mutation,
    MutationCreateUniversityArgs
  >(CREATE_UNIVERSITY, {
    refetchQueries: [
      {
        query: GET_UNIVERSITIES,
        variables: {
          count: 10,
          offset: 0,
          filter: queryFilterInitial,
        },
      },
    ],
    onCompleted() {
      ActivePageUniversity(0);
      QueryFilterUni(queryFilterInitial);
    },
  });
  const [deleteUniMutation] = useMutation<
    Mutation,
    MutationDeleteUniversityByIdArgs
  >(DELETE_UNI_BY_ID, {
    refetchQueries: [
      {
        query: GET_UNIVERSITIES,
        variables: {
          count: 10,
          offset: activePage,
          filter: queryFilterUni,
        },
      },
    ],
  });

  const createUni = async (data: CreateUniversityData) => {
    try {
      const res = await createUniversityMutation({
        variables: { createUniversityData: data },
      });
      if (res.data?.createUniversity) return res.data?.createUniversity;
    } catch (error: any) {
      console.error(error);
      enqueueSnackbar(`${error?.message}`, { variant: "error" });
      throw error;
    }
  };

  const deleteUniById = async (variables: MutationDeleteUniversityByIdArgs) => {
    try {
      const res = await deleteUniMutation({
        variables,
        update(cache) {
          cache.evict({ id: `UniversityData:${variables.universityId}` });
        },
      });
      if (res.data?.deleteUniversityById.success)
        return res.data?.deleteUniversityById.success;
    } catch (error: any) {
      console.error(error);
      enqueueSnackbar(`${error?.message}`, { variant: "error" });
      throw error;
    }
  };

  const editUni = async (variables: MutationEditUniArgs) => {
    try {
      const res = await editUniMutation({
        variables,
      });
      if (res.data?.editUni) return res.data?.editUni;
    } catch (error: any) {
      console.error(error);
      enqueueSnackbar(`${error?.message}`, { variant: "error" });
      throw error;
    }
  };

  return { createUni, deleteUniById, editUni };
};
export default useUniversity;
