import request from "@/utils/request";

/**
 * 取得教育程度
 */
export const getEducationList = () => {
    return request({
        url: "/api/v1/educationLevelList",
        method: "get",
    });
};

/**
 * 取得薪資範圍
 */
export const getSalaryList = () => {
    return request({
        url: "/api/v1/salaryLevelList",
        method: "get"
    });
};

/**
 * 取得工作清單
 */
export const getJobList = () => {
    return request({
        url: "api/v1/jobs",
        method: "get"
    });
};

export const getJobId = (id) => {
    return request({
        url: `api/v1/jobs/${id}`,
        method: "get"
    });
};
