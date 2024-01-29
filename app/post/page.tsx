"use client";

import { Box, Flex, FormLabel, Image, Icon, Select, SimpleGrid, useColorModeValue } from "@chakra-ui/react";
// Custom components
import IconBox from "../../components/icons/IconBox";
import { MdAddTask, MdAttachMoney, MdBarChart, MdBookmark, MdFileCopy, MdOutlineBookmarkAdd } from "react-icons/md";
import DataTable from "@/components/tables/DataTable";
import { PostColumnInterFace } from "../interface/post.interface";
import { getPosts } from "@/app/actions/post.actions";
// Assets

const getStoredBookmarks = () => {
  const storedBookmarks = window.localStorage.getItem("bookmarks");
  return storedBookmarks ? JSON.parse(storedBookmarks) : [];
};

const postListPage = async () => {
  // TODO:
  // Bookmarks and post single page is left :( sorry couldn't complete it on time submitting
  // Unable to complete it as for there were multiple post request running not able to use client side component efficiently
  const postLists = await getPosts();
  // const bookmarks = typeof window !== "undefined" ? getStoredBookmarks() : [];

  const handleEdit = (id: Number) => {
    // Perform navigation to the edit page using React Router or window.location
    console.log("Edit ID:", id);
    // Example: navigate to an edit page with the row's ID
    // window.location(`/edit/${rowData.id}`);
  };


  const action = (id: number) => (
    
    <Flex gap={2}>
      <MdOutlineBookmarkAdd color="defaultTextColor" h="18px" w="19px" onClick={() => console.log("book marked ${index} clicked")} />
    </Flex>
  );


  return (
    <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3, "2xl": 6 }} gap="20px" mb="20px"></SimpleGrid>

      <SimpleGrid columns={{ base: 1, md: 2, xl: 2 }} gap="20px" mb="20px">
        {/* <TotalSpent /> */}
        {/* <WeeklyRevenue /> */}
      </SimpleGrid>
      <SimpleGrid columns={{ base: 1, md: 1, xl: 1 }} gap="20px" mb="20px">
        <DataTable columnsData={PostColumnInterFace} tableData={postLists as unknown as TableData[]} isSelectable={false} showPageSize={false} onEdit={handleEdit} actionSlot={(id:number)=>action(id)} />
      </SimpleGrid>
    </Box>
  );
};

export default postListPage;

export const dynamic = "force-dynamic";
