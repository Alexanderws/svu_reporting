import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { withRouter } from "react-router-dom";

import { getRecords } from "../services/airtable";

import Header from "../components/header.component";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: #faf9fa;
`;

const InnerContainer = styled.div`
  margin: 40px 60px;
  padding: 20px;
  height: 100%;
  background-color: white;
`;
const TableRow = styled.tr`
  text-align: left;
  border-bottom: 1px solid lightgrey;
`;

const TableHeading = styled.th`
  font-size: 0.875rem;
  font-weight: 500;
`;
const TableCell = styled.td`
  font-size: 0.875rem;
`;

const StartPage = ({ history }) => {
  const [records, setRecords] = useState([]);
  const dtf = new Intl.DateTimeFormat("en", {
    year: "numeric",
    month: "short",
    day: "2-digit"
  });

  getRecords(records, setRecords);

  return (
    <Container>
      <Header />
      <InnerContainer>
        <table
          style={{
            width: "100%",
            height: "100%",
            borderCollapse: "collapse"
          }}
        >
          <thead>
            <TableRow>
              <TableHeading>DATO</TableHeading>
              <TableHeading>ETAT</TableHeading>
              <TableHeading>SMITTEFRAKK</TableHeading>
              <TableHeading>ÅNDEDRETTSVERN FFP2</TableHeading>
              <TableHeading>ÅNDEDRETTSVERN FFP3</TableHeading>
              <TableHeading>HANSKER</TableHeading>
              <TableHeading>MUNNBIND</TableHeading>
              <TableHeading>MUNNBIND M/ VISIR</TableHeading>
              <TableHeading>OPERASJONSLUER</TableHeading>
              <TableHeading>ØYEBESKYTTELSE</TableHeading>
            </TableRow>
          </thead>
          <tbody>
            {records.map(recObj => {
              return (
                <TableRow key={recObj.id}>
                  <TableCell>
                    {dtf.format(Date.parse(recObj.fields["RegDato"]))}
                  </TableCell>
                  <TableCell>{recObj.fields["Etatnavn"]}</TableCell>
                  <TableCell>
                    {recObj.fields["Smittefrakk beholdning"]}
                  </TableCell>
                  <TableCell>
                    {recObj.fields["Åndedrettsvern FFP2 beholdning"]}
                  </TableCell>
                  <TableCell>
                    {recObj.fields["Åndedrettsvern FFP3 beholdning"]}
                  </TableCell>
                  <TableCell>
                    {
                      recObj.fields[
                        "Hansker: nitril, latex og vinyl beholdning"
                      ]
                    }
                  </TableCell>
                  <TableCell>
                    {recObj.fields["Kirurgiske munnbind beholdning"]}
                  </TableCell>
                  <TableCell>
                    {
                      recObj.fields[
                        "Kirurgiske munnbind med visir beholdning"
                      ]
                    }
                  </TableCell>
                  <TableCell>
                    {recObj.fields["Operasjonsluer/hetter beholdning"]}
                  </TableCell>
                  <TableCell>
                    {
                      recObj.fields[
                        "Øyebeskyttelse:visir og briller beholdning"
                      ]
                    }
                  </TableCell>
                </TableRow>
              );
            })}
          </tbody>
        </table>
        <button
          onClick={() => {
            history.push("/form/");
          }}
        >
          Gå til skjema
        </button>
      </InnerContainer>
    </Container>
  );
};

export default withRouter(StartPage);
