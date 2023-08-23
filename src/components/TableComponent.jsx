/* eslint-disable no-unused-vars */
import React from "react";
import {
  Table,
  TableHead,
  TableHeaderCell,
  TableBody,
  TableRow,
  TableCell,
  TableFoot,
  TableFooterCell,
} from "@tremor/react";
import { StatusOnlineIcon } from "@heroicons/react/outline";

import { Card, Title, Text, Badge } from "@tremor/react";

// const data = [
//   {
//     name: "Viola Amherd",
//     Role: "Federal Councillor",
//     departement:
//       "The Federal Department of Defence, Civil Protection and Sport (DDPS)",
//     status: "active",
//   },
//   {
//     name: "Simonetta Sommaruga",
//     Role: "Federal Councillor",
//     departement:
//       "The Federal Department of the Environment, Transport, Energy and Communications (DETEC)",
//     status: "active",
//   },
//   {
//     name: "Alain Berset",
//     Role: "Federal Councillor",
//     departement: "The Federal Department of Home Affairs (FDHA)",
//     status: "active",
//   },
//   {
//     name: "Ignazio Cassis",
//     Role: "Federal Councillor",
//     departement: "The Federal Department of Foreign Affairs (FDFA)",
//     status: "active",
//   },
//   {
//     name: "Ueli Maurer",
//     Role: "Federal Councillor",
//     departement: "The Federal Department of Finance (FDF)",
//     status: "active",
//   },
//   {
//     name: "Guy Parmelin",
//     Role: "Federal Councillor",
//     departement:
//       "The Federal Department of Economic Affairs, Education and Research (EAER)",
//     status: "active",
//   },
//   {
//     name: "Karin Keller-Sutter",
//     Role: "Federal Councillor",
//     departement: "The Federal Department of Justice and Police (FDJP)",
//     status: "active",
//   },
// ];
const data = [
  {
    name: "Elena Müller",
    Role: "Federal Councillor",
    departement: "The Federal Department of Health and Social Affairs (FDHSA)",
    status: "active",
  },
  {
    name: "Andreas Schneider",
    Role: "Federal Councillor",
    departement:
      "The Federal Department of Infrastructure and Digitalization (FDID)",
    status: "active",
  },
  {
    name: "Nina Weber",
    Role: "Federal Councillor",
    departement: "The Federal Department of Culture and Media (FDCM)",
    status: "active",
  },
  {
    name: "Julian Fischer",
    Role: "Federal Councillor",
    departement: "The Federal Department of International Relations (FDIR)",
    status: "active",
  },
  {
    name: "Lara Zimmermann",
    Role: "Federal Councillor",
    departement: "The Federal Department of Economy and Innovation (FDEI)",
    status: "active",
  },
  {
    name: "Fabian Müller",
    Role: "Federal Councillor",
    departement: "The Federal Department of Legal Affairs (FDLA)",
    status: "active",
  },
  {
    name: "Sophia Meier",
    Role: "Federal Councillor",
    departement: "The Federal Department of Science and Technology (FDST)",
    status: "active",
  },
];

const TableComponent = () => {
  return (
    <Card className="mt-2">
      <Title>List of Swiss Federal Councillours</Title>
      <Table className="mt-5">
        <TableHead>
          <TableRow>
            <TableHeaderCell>Name</TableHeaderCell>
            <TableHeaderCell>Position</TableHeaderCell>
            <TableHeaderCell>Department</TableHeaderCell>
            <TableHeaderCell>Status</TableHeaderCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((item) => (
            <TableRow key={item.name}>
              <TableCell>{item.name}</TableCell>
              <TableCell>
                <Text>{item.Role}</Text>
              </TableCell>
              <TableCell>
                <Text>{item.departement}</Text>
              </TableCell>
              <TableCell>
                <Badge color="emerald" icon={StatusOnlineIcon}>
                  {item.status}
                </Badge>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  );
};

export default TableComponent;
