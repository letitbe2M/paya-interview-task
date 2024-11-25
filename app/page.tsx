import React from "react";
import CustomTable from "./_components/CustomTable";

type Props = {};

const page = (props: Props) => {
  return (
    <div className="justify-center container flex items-center mx-auto">
      <CustomTable />
    </div>
  );
};

export default page;
