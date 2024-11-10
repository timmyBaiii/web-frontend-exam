import request from "@/utils/request";

/**
 * 取得教育程度
 */
export const getEducationList = () => {
    return request({
        url: `${process.env.REACT_APP_API_NAMESPACE}/educationLevelList`,
        method: "get",
    });
};

/**
 * 取得薪資範圍
 */
export const getSalaryList = () => {
    return request({
        url: `${process.env.REACT_APP_API_NAMESPACE}/salaryLevelList`,
        method: "get"
    });
};

/**
 * 取得工作清單
 */
export const getJobList = () => {
    return request({
        url: `${process.env.REACT_APP_API_NAMESPACE}/jobs`,
        method: "get"
    });
};

export const getJobId = (id) => {
    return request({
        url: `${process.env.REACT_APP_API_NAMESPACE}/jobs/${id}`,
        method: "get"
    });
};
