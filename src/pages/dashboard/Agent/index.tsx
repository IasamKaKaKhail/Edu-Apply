import {
  DropdownSelect,
  PageTitleText,
  SearchInputOutline,
  TableFooter,
} from "@/components";
import AddItemNotice from "@/components/dashboard/AddItemNotice";
import { AgentListHeader, AgentListRow } from "@/components/dashboard/Agent";
import { TableContainer } from "@/components/dashboard/styled";
import { AdminLayout } from "@/components/layout";
import {
  ActivePageAgents,
  GET_AGENTS,
  QueryFilterAgents,
  queryFilterInitial,
} from "@/graphql";
import { Query, QueryGetAgentsArgs } from "@/graphql/__generatedTypes__";
import { SVGS } from "@/utils";
import { useQuery, useReactiveVar } from "@apollo/client";
import { Box, Grid } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";
import { Fragment, ReactElement, useEffect, useState } from "react";
import { NextPageWithLayout } from "../../_app";

const filterOption = [
  { id: "1", filter: "ID" },
  { id: "2", filter: "NAME" },
  { id: "3", filter: "COUNTRY" },
  { id: "4", filter: "EMAIL" },
];

const dorpdownSelectOption = [
  { id: "1", filter: "Add Agent" },
  { id: "2", filter: "Import CSV file " },
];
let filterTimeout: NodeJS.Timeout | undefined = undefined;

const Page: NextPageWithLayout = () => {
  // const [value, setValue] = useState('')
  const [filter, setFilter] = useState(filterOption[1].filter);
  const [selected, setSelected] = useState(dorpdownSelectOption[0].filter);
  // const [queryFilter, setQueryFilter] = useState<InputMaybe<Filter>>({
  //   country: "",
  //   email: "",
  //   id: "",
  //   name: "",
  // });

  const queryFilter = useReactiveVar(QueryFilterAgents);
  const activePage = useReactiveVar(ActivePageAgents);

  const [filterValue, setFilterValue] = useState("");

  const { data } = useQuery<Query, QueryGetAgentsArgs>(GET_AGENTS, {
    variables: {
      count: 10,
      offset: activePage * 10,
      filter: queryFilter || queryFilterInitial,
    },
    fetchPolicy: "network-only",
  });

  //update Search query with debounce of 700ms delay
  useEffect(() => {
    clearTimeout(filterTimeout);
    if (!filterValue) {
      QueryFilterAgents({
        country: "",
        email: "",
        id: "",
        name: "",
      });
      return;
    }
    filterTimeout = setTimeout(() => {
      console.log("====>", filterValue);
      QueryFilterAgents({
        country: filter === "COUNTRY" ? filterValue : "",
        email: filter === "EMAIL" ? filterValue : "",
        id: filter === "ID" ? filterValue : "",
        name: filter === "NAME" ? filterValue : "",
      });
    }, 700);
  }, [filterValue]);

  useEffect(() => {
    setFilterValue("");
  }, [filter]);

  const router = useRouter();
  return (
    <Fragment>
      <Grid
        minHeight={"calc(100vh - 10rem)"}
        minWidth={"155rem"}
        paddingBottom={"3rem"}
      >
        <Grid>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              padding: "2.5rem",
            }}
          >
            <PageTitleText>Agent List</PageTitleText>
            <DropdownSelect
              onClickBtn={() => router.push("Agent/CreateAgent")}
              selected={selected}
              setSelected={setSelected}
              options={dorpdownSelectOption}
            />
          </Box>
        </Grid>
        <Grid>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              padding: "2.5rem",
              paddingTop: "0rem",
            }}
          >
            <SearchInputOutline
              filter={filter}
              setFilter={setFilter}
              filterOptions={filterOption}
              onChangeValue={(value) => setFilterValue(value)}
              value={filterValue}
            />
            <Image
              src={SVGS.hamburgerOutlined}
              alt="options-icon"
              width={50}
              height={50}
              style={{
                width: "5rem",
                height: "5rem",
              }}
            />
          </Box>
        </Grid>
        <TableContainer>
          <AgentListHeader />
          {data?.getAgents?.agentsProfile?.length ? (
            data.getAgents.agentsProfile.map((item) => (
              <AgentListRow agent={item} key={item.id} />
            ))
          ) : (
            <AddItemNotice name="Agents" />
          )}
          <TableFooter
            onPageChange={(e) => ActivePageAgents(e)}
            total={data?.getAgents.total}
            activePage={activePage}
          />
        </TableContainer>
      </Grid>
    </Fragment>
  );
};

Page.getLayout = function getLayout(page: ReactElement) {
  return <AdminLayout>{page}</AdminLayout>;
};

export default Page;
