import {fetchFilteredCustomers} from "@/app/lib/data";
import Table from "@/app/ui/customers/table";
import {Metadata} from "next";
import React, {Suspense} from "react";

export const metadata: Metadata = {
  title: "Customers",
};

const CustomersPage = async () => {
  const customers = await fetchFilteredCustomers("");
  return (
    <div className="w-full">
      <Suspense>
        <Table customers={customers} />
      </Suspense>
    </div>
  );
};

export default CustomersPage;
