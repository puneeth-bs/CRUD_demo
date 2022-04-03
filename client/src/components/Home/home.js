import React, { useState } from "react";
import { Box, FileInput, Grommet, Button } from "grommet";
import { hpe } from "grommet-theme-hpe";
import PropTypes from "prop-types";
import "bootstrap/dist/css/bootstrap.css";
import { DataTable, Heading, Meter, Text, ResponsiveContext } from "grommet";
import { Link } from "react-router-dom";

const data = [
  {
    ipAddress: "15.213.248.152",
    hostName: "SEC-WIN",
    port: "8080",
    protocol: "tcp",
    cvss: "10",
    severity: "High",
    timeStamp: "2021-12-01T06:14:24Z",
  },
  {
    ipAddress: "15.213.248.26",
    hostName: "WIN-IPN1EGOQU4Q",
    port: "8081",
    protocol: "tcp",
    cvss: "9.3",
    severity: "High",
    timeStamp: "2021-12-01T07:48:43Z",
  },
  {
    ipAddress: "15.213.248.150",
    hostName: "WIN-IPN1EGOQU4Q",
    port: "22",
    protocol: "tcp",
    cvss: "10",
    severity: "High",
    timeStamp: "2021-12-01T07:35:31Z",
  },
  {
    ipAddress: "15.213.248.142",
    hostName: "SEC-WIN",
    port: "433",
    protocol: "tcp",
    cvss: "3.5",
    severity: "Low",
    timeStamp: "2021-12-01T07:01:16Z",
  },
  {
    ipAddress: "15.213.248.112",
    hostName: "SEC-WIN",
    port: "8080",
    protocol: "tcp",
    cvss: "10",
    severity: "High",
    timeStamp: "2021-12-01T06:30:28Z",
  },
  {
    ipAddress: "15.213.248.102",
    hostName: "SEC-WIN",
    port: "8080",
    protocol: "tcp",
    cvss: "5.9",
    severity: "Medium",
    timeStamp: "2021-12-01T06:14:34Z",
  },
  {
    ipAddress: "15.213.248.152",
    hostName: "SEC-WIN",
    port: "8080",
    protocol: "tcp",
    cvss: "10",
    severity: "High",
    timeStamp: "2021-12-01T06:14:24Z",
  },
  {
    ipAddress: "15.213.248.152",
    hostName: "SEC-WIN",
    port: "8080",
    protocol: "tcp",
    cvss: "10",
    severity: "High",
    timeStamp: "2021-12-01T06:14:24Z",
  },
  {
    ipAddress: "15.213.248.152",
    hostName: "SEC-WIN",
    port: "8080",
    protocol: "tcp",
    cvss: "10",
    severity: "High",
    timeStamp: "2021-12-01T06:14:24Z",
  },
  {
    ipAddress: "15.213.248.152",
    hostName: "SEC-WIN",
    port: "8080",
    protocol: "tcp",
    cvss: "10",
    severity: "High",
    timeStamp: "2021-12-01T06:14:24Z",
  },
  {
    ipAddress: "15.213.248.152",
    hostName: "SEC-WIN",
    port: "8080",
    protocol: "tcp",
    cvss: "10",
    severity: "High",
    timeStamp: "2021-12-01T06:14:24Z",
  },
  {
    ipAddress: "15.213.248.152",
    hostName: "SEC-WIN",
    port: "8080",
    protocol: "tcp",
    cvss: "10",
    severity: "High",
    timeStamp: "2021-12-01T06:14:24Z",
  },
  {
    ipAddress: "15.213.248.152",
    hostName: "SEC-WIN",
    port: "8080",
    protocol: "tcp",
    cvss: "10",
    severity: "High",
    timeStamp: "2021-12-01T06:14:24Z",
  },
  {
    ipAddress: "15.213.248.152",
    hostName: "SEC-WIN",
    port: "8080",
    protocol: "tcp",
    cvss: "10",
    severity: "High",
    timeStamp: "2021-12-01T06:14:24Z",
  },
  {
    ipAddress: "15.213.248.152",
    hostName: "SEC-WIN",
    port: "8080",
    protocol: "tcp",
    cvss: "10",
    severity: "High",
    timeStamp: "2021-12-01T06:14:24Z",
  },
];

const columns = [
  {
    property: "ipAddress",
    header: "IP Address",
    render: (datum) => <Text truncate>{datum.ipAddress}</Text>,
    sortable: false,
    primary: false,
  },
  {
    property: "hostName",
    header: "Hostname",
    sortable: false,
  },
  {
    property: "port",
    header: "Port",
    render: (datum) => <Text truncate>{datum.port}</Text>,
    sortable: false,
  },
  {
    property: "protocol",
    header: "Portocol",
    render: (datum) => <Text truncate>{datum.protocol}</Text>,
    sortable: false,
  },
  {
    property: "cvss",
    header: "CVSS",
    render: (datum) => <Text truncate>{datum.cvss}</Text>,
    // primary: true,
  },
  {
    property: "severity",
    header: (
      <Text color="text-strong" weight="bold">
        Severity{" "}
      </Text>
    ),
    render: (datum) => <Text truncate>{datum.severity}</Text>,
    align: "start",
    sortable: false,
  },
  {
    property: "timeStamp",
    header: (
      <Text color="text-strong" weight="bold">
        TimeStamp{""}
      </Text>
    ),
    align: "end",
    render: (datum) => <Text truncate>{datum.timeStamp}</Text>,
    sortable: false,
  },
];

const handleClickRow = (obj) => {
  // eslint-disable-next-line no-alert
  alert(`
    Record was clicked:
    { 
        id: ${obj.id},
        poolName: ${obj.poolName}
    }
    
    You can use onClickRow() to navigate to a record's detail
    page, open a panel or modal to edit the record, or perform 
    other actions as you see fit.
    `);
};

const DataTableExample = ({ designSystemDemo }) => {
  const size = React.useContext(ResponsiveContext);
  const [numFiles, setNumFiles] = useState(0);
  return (
    <Grommet theme={hpe}>
      <div className="container">
        <>
          <div className="d-flex flex-row justify-content-between container">
            <div className="">
              <Box width="medium">
                <FileInput
                  messages={{
                    dropPrompt: "Drag and drop",
                    browse: numFiles > 0 ? "Replace File" : "Select File",
                  }}
                  onChange={(event, { files }) => setNumFiles(files.length)}
                />
              </Box>
            </div>

            <div className="ml-auto  p-2 ">
              <Link to="/addItemForm">
                <Button label="Add Item" primary onClick={() => {}} />
              </Link>
            </div>
          </div>

          <Heading
            id="storage-pools-heading"
            level={3}
            margin={{ bottom: "small", top: "none" }}
          ></Heading>
          <Box
            // Height is restricted to keep inline doc page examples more compact.
            // In production, DataTable height should follow height guidelines.
            // https://design-system.hpe.design/components/datatable#setting-the-height-of-a-table
            height={designSystemDemo ? undefined : "medium"}
            overflow="auto"
          >
            <DataTable
              aria-describedby="storage-pools-heading"
              data={data}
              columns={[...columns]}
              fill
              onClickRow={({ datum }) => handleClickRow(datum)}
              pin
              sortable
            />
          </Box>
        </>
      </div>
    </Grommet>
  );
};

DataTableExample.propTypes = {
  designSystemDemo: PropTypes.bool,
};

export default DataTableExample;
