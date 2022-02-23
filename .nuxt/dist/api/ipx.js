import { createIPX, createIPXMiddleware } from "ipx";
const ipx = createIPX({"dir":"/home/runner/work/saccloud/saccloud/static","domains":[],"sharp":{},"alias":{}});
export default createIPXMiddleware(ipx);
