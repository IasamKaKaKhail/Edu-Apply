import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import { Box, ButtonBase } from "@mui/material";
import { InfoTagText, SubTitle } from "../AppText";
import { TableFooter as TF } from "./styled";

type Props = {
  activePage: number;
  total: number | undefined;
  pageSize?: number;
  onPageChange: (page: number) => void;
};

const TableFooter = ({
  activePage = 0,
  total = 0,
  pageSize = 10,
  onPageChange,
}: Props) => {
  const startIndex = activePage === 0 ? 1 : activePage * pageSize;
  const endIndex = Math.min(startIndex + pageSize - 1, total);
  const pageCount = Math.ceil(total / pageSize);

  const handlePreviousClick = () => {
    onPageChange(activePage - 1);
  };

  const handleNextClick = () => {
    onPageChange(activePage + 1);
  };

  const handlePageClick = (page: number) => {
    onPageChange(page);
  };

  const renderPageButtons = () => {
    const pageButtons = [];
    for (let i = 0; i < pageCount; i++) {
      const page = i + 1;
      const isCurrentPage = page === activePage + 1;
      pageButtons.push(
        <ButtonBase
          key={page}
          onClick={() => handlePageClick(page - 1)}
          disabled={isCurrentPage}
          sx={{
            minWidth: "3.4rem",
            minHeight: "3.4rem",
            marginX: "0.5rem",
            borderRadius: "0.6rem",
            backgroundColor: isCurrentPage ? "primary.main" : "white",
          }}
        >
          <InfoTagText sx={{ color: isCurrentPage ? "white" : "primary.main" }}>
            {page}
          </InfoTagText>
        </ButtonBase>,
      );
    }
    return pageButtons;
  };
  return (
    <TF>
      <SubTitle sx={{ color: "#111111" }}>
        Showing&nbsp;
        {total === 0 ? 0 : startIndex}&nbsp; to&nbsp;
        {total === 0 ? 0 : endIndex}&nbsp; of&nbsp;
        {total || 0}&nbsp; entries&nbsp;
      </SubTitle>
      <Box flex={1} sx={{ justifyContent: "flex-end", textAlign: "right" }}>
        <ButtonBase onClick={handlePreviousClick} disabled={activePage === 0}>
          <ArrowBackIos
            sx={{ color: activePage === 0 ? "#88888855" : "primary.main" }}
          />
        </ButtonBase>
        {renderPageButtons()}
        <ButtonBase
          onClick={handleNextClick}
          disabled={activePage === pageCount - 1}
        >
          <ArrowForwardIos
            sx={{
              color:
                activePage === pageCount - 1 ? "#88888855" : "primary.main",
            }}
          />
        </ButtonBase>
      </Box>
    </TF>
  );
};

export default TableFooter;
