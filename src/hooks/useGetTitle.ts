import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";

type ITitle =
  | "Home"
  | "Search"
  | "Agent List"
  | "Student List"
  | "Add Student"
  | "University Manegment"
  | "Student Training"
  | "Settings"
  | "Payment"
  | "Event Page"
  | "Student Profile"
  | "Add Agent"
  | "Add University"
  | "Agent Profile"
  | "University Profile";

const useGetTitle = () => {
  const [title, setTitle] = useState<ITitle>("Home");
  const router = useRouter();
  const updateTitle = useCallback(() => {
    if (router.route.includes("/dashboard/Search")) {
      setTitle("Search");
    } else if (router.route.includes("/dashboard/StudentTraining")) {
      setTitle("Student Training");
    } else if (router.route.includes("/dashboard/Student/StudentProfile")) {
      setTitle("Student Profile");
    } else if (router.route.includes("/dashboard/Agent/AgentProfile")) {
      setTitle("Agent Profile");
    } else if (
      router.route.includes("/dashboard/University/UniversityProfile")
    ) {
      setTitle("University Profile");
    } else if (router.route.includes("/dashboard/Student/CreateStudent")) {
      setTitle("Add Student");
    } else if (router.route.includes("/dashboard/Agent/CreateAgent")) {
      setTitle("Add Agent");
    } else if (
      router.route.includes("/dashboard/University/CreateUniversity")
    ) {
      setTitle("Add University");
    } else if (router.route.includes("/dashboard/PaymentSettings")) {
      setTitle("Settings");
    } else if (router.route.includes("/dashboard/Payment")) {
      setTitle("Payment");
    } else if (router.route.includes("/dashboard/Event")) {
      setTitle("Event Page");
    } else if (router.route.includes("/dashboard/Settings")) {
      setTitle("Settings");
    } else if (router.route.includes("/dashboard/Agent")) {
      setTitle("Agent List");
    } else if (router.route.includes("/dashboard/University")) {
      setTitle("University Manegment");
    } else if (router.route.includes("/dashboard/Student")) {
      setTitle("Student List");
    } else if (router.route.includes("/dashboard")) {
      setTitle("Home");
    }
  }, [router.route]);
  useEffect(() => {
    updateTitle();
  }, [router.route]);

  return title;
};
export default useGetTitle;
