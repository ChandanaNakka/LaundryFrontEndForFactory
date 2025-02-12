let StartFunc = async () => {
    let jVarLocalFilterString = getUrlQueryParams({ inGetKey: "VoucherRef" });

    let jVarLocalFetchUrl = `/Custom/Cleaning/Factory/V1/Outward/Scan/Voucher/RowData/${jVarLocalFilterString}`;

    let response = await fetch(jVarLocalFetchUrl);
    let data = await response.json();

    return await data;
};

let getUrlQueryParams = ({ inGetKey }) => {
    const queryString = window.location.search;
    const parameters = new URLSearchParams(queryString);
    const value = parameters.get(inGetKey);
    return value;
};

export { StartFunc };