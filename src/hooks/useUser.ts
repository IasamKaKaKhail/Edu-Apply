import { AuthToken, LoggedInProfile, LoggedInUser } from "@/graphql";
import { AdminProfile, User } from "@/graphql/__generatedTypes__";
import { localStorageMultiSet } from "@/utils";

type Props = {
  profile: AdminProfile;
  token: string;
  user: User;
  remember?: boolean;
};

const useUser = () => {
  const loginUser = (props: Props) => {
    const { profile, token, user, remember = true } = props;

    LoggedInUser(user);
    LoggedInProfile(profile);
    AuthToken(token);
    if (remember) {
      localStorageMultiSet([
        { key: "adminProfile", value: profile },
        { key: "token", value: token },
        { key: "user", value: user },
      ]);
    }
  };
  return {
    loginUser,
  };
};

export default useUser;
