import {
  ActivePageStudents,
  CREATE_STUDENT,
  DELETE_STUDENT_BY_ID,
  EDIT_STUDENT,
  GET_STUDENTS,
  queryFilterInitial,
  QueryFilterStudents,
} from "@/graphql";
import {
  CreateStudentData,
  Mutation,
  MutationCreateStudentArgs,
  MutationDeleteStudentByIdArgs,
  MutationEditStudentArgs,
} from "@/graphql/__generatedTypes__";
import { useMutation, useReactiveVar } from "@apollo/client";
import { useSnackbar } from "notistack";
const useStudent = () => {
  const activePage = useReactiveVar(ActivePageStudents);
  const queryFilter = useReactiveVar(QueryFilterStudents);
  const { enqueueSnackbar } = useSnackbar();

  const [editStudentMutation] = useMutation<Mutation, MutationEditStudentArgs>(
    EDIT_STUDENT,
  );

  const [createSudentMutation] = useMutation<
    Mutation,
    MutationCreateStudentArgs
  >(CREATE_STUDENT, {
    refetchQueries: [
      {
        query: GET_STUDENTS,
        variables: {
          count: 10,
          offset: 0,
          filter: queryFilterInitial,
        },
      },
    ],
    onCompleted() {
      ActivePageStudents(0);
      QueryFilterStudents(queryFilterInitial);
    },
  });
  const [deleteStudentMutation] = useMutation<
    Mutation,
    MutationDeleteStudentByIdArgs
  >(DELETE_STUDENT_BY_ID, {
    refetchQueries: [
      {
        query: GET_STUDENTS,
        variables: {
          count: 10,
          offset: activePage,
          filter: queryFilter,
        },
      },
    ],
  });

  const createStudent = async (data: CreateStudentData) => {
    try {
      const res = await createSudentMutation({
        variables: { createStudentData: data },
      });
      if (res.data?.createStudent) return res.data?.createStudent;
    } catch (error: any) {
      console.error(error);
      enqueueSnackbar(`${error?.message}`, { variant: "error" });
      throw error;
    }
  };

  const deleteStudentById = async (
    variables: MutationDeleteStudentByIdArgs,
  ) => {
    try {
      const res = await deleteStudentMutation({
        variables,
        update(cache) {
          cache.evict({ id: `GetStudentRes:${variables.studentId}` });
        },
      });
      if (res.data?.deleteStudentById.success)
        return res.data?.deleteStudentById.success;
    } catch (error: any) {
      console.error(error);
      enqueueSnackbar(`${error?.message}`, { variant: "error" });
      throw error;
    }
  };

  const editStudent = async (variables: MutationEditStudentArgs) => {
    try {
      const res = await editStudentMutation({
        variables,
      });
      if (res.data?.editStudent) return res.data?.editStudent;
    } catch (error: any) {
      console.error(error);
      enqueueSnackbar(`${error?.message}`, { variant: "error" });
      throw error;
    }
  };

  return { createStudent, deleteStudentById, editStudent };
};
export default useStudent;
