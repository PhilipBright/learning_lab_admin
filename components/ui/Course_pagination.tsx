import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
  } from "@/components/ui/pagination"
  
  type PaginationProps = {
    totalPages: number;
    currentPage: number;
    onPageChange: (page: number) => void;
  };
  
  export function Pagination_course({ totalPages, currentPage, onPageChange }: PaginationProps) {
    const renderPaginationLinks = () => {
        const links = [];
  
        for (let i = 1; i <= totalPages; i++) {
            links.push(
                <PaginationItem key={i} onClick={() => onPageChange(i)}>
                    <PaginationLink href="#" isActive={i === currentPage}>{i}</PaginationLink>
                </PaginationItem>
            );
        }
        return links;
    };
  
    return (
      <Pagination>
      <PaginationContent>
          {renderPaginationLinks()}
      </PaginationContent>
  </Pagination>
    );
  }
  