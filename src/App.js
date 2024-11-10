import React, { Fragment, useEffect, useMemo, useRef, useState } from "react";
import FigureBackground from "@/assets/FigureBackground.png";
import Figure from "@/assets/Figure.png";
import LeftEye from "@/assets/LeftEye.png";
import RightEye from "@/assets/RightEye.png";
import Heeloo from "@/assets/Heeloo.png";
import "./App.sass";
import {
    getEducationList,
    getSalaryList,
    getJobList,
    getJobId
} from "@/api/server";
import {
    styled,
    Box,
    Card,
    Container,
    Grid,
    Typography,
    TextField,
    MenuItem,
    Button,
    Pagination,
    DialogTitle,
    Dialog,
    DialogContent,
    DialogActions
} from "@mui/material";
import parse from "html-react-parser";
import TextEllipsis from "react-text-ellipsis";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination as Pag } from "swiper/modules";

const App = () => {
    const [educationList, setEducationList] = useState([]);
    const [salaryList, setSalaryList] = useState([]);
    const [jobList, setJobList] = useState([]);
    const [jobFilterResult, setJobFilterResult] = useState([]);
    const [companyNameInput, setCompanyNameInput] = useState("");
    const [educationInput, setEducationInput] = useState("0");
    const [salaryInput, setSalaryInput] = useState("0");
    const [isShowFilterJobBar, setIsShowFilterJobBar] = useState(true);


    const [page, setPage] = useState(1);
    const [open, setOpen] = useState(false);
    const [jobIdInfo, setJobIdInfo] = useState(null);
    const displayJobCount = 6;



    /**
     * 處理教育程度
     */
    const handleEducationList = () => {
        getEducationList().then((res) => {
            const { data } = res;

            setEducationList(data);
        });
    };

    /**
     * 處理薪資
     */
    const handleSalaryList = () => {
        getSalaryList().then((res) => {
            const { data } = res;

            setSalaryList(data);
        });
    };

    /**
     * 處理工作機會
     */
    const handleJobList = () => {
        getJobList().then((res) => {
            const { data } = res.data;

            setJobList(data);
            setJobFilterResult(data);
        });
    };

    /**
     * 處理工作詳細資訊
     */
    const handleGetJobId = (index) => {
        const jobId = index + 1;

        getJobId(jobId).then((res) => {
            const { data } = res;
            setJobIdInfo(data);

            handleClickOpen();
        });
    };

    const handleCompanyNameInput = (e) => {
        setCompanyNameInput(e.target.value);
    };

    const handleEducationInput = (e) => {
        setEducationInput(e.target.value);
    };

    const handleSalaryInput = (e) => {
        setSalaryInput(e.target.value);
    };

    const handleChangePaginationPage = (event, value) => {
        setPage(value);
    };

    const handleFilterJobs = () => {
        if (companyNameInput === "" && educationInput === "0" && salaryInput === "0") {
            setJobFilterResult(jobList);
        }
        else {
            const smallCompanyName = companyNameInput.toLowerCase();

            const result = jobList.filter((item) => {
                const smallTargetCompanyName = item.companyName.toLowerCase();

                if (smallTargetCompanyName !== "") {
                    if (smallTargetCompanyName.indexOf(smallCompanyName) !== -1) {
                        return item;
                    }
                }
                else {
                    return item;
                }
            }).filter((item) => {
                if (educationInput !== "0") {
                    if (item.educationId === parseInt(educationInput)) {
                        return item;
                    }
                }
                else {
                    return item;
                }
            }).filter((item) => {
                if (salaryInput !== "0") {
                    if (item.salaryId === parseInt(salaryInput)) {
                        return item;
                    }
                }
                else {
                    return item;
                }
            });

            setJobFilterResult(result);
        }
    };

    const showJobList = useMemo(() => {
        let result = [];

        let start = page * displayJobCount - displayJobCount;
        let end = page * displayJobCount;

        result = jobFilterResult.slice(start, end);

        return result;
    }, [page, jobFilterResult]);

    const pageCount = useMemo(() => {
        return Math.ceil(jobFilterResult.length / displayJobCount);
    }, [jobFilterResult]);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setJobIdInfo(null);
        setOpen(false);
    };

    const BootstrapDialog = styled(Dialog)(({ theme }) => ({
        "& .MuiDialogContent-root": {
            padding: theme.spacing(2),
        },
        "& .MuiDialogActions-root": {
            padding: theme.spacing(1),
        },
    }));




    const handleResize = () => {
        const { body } = document;
        const rect = body.getBoundingClientRect();

        if (rect.width < 992) {
            setIsShowFilterJobBar(false);
        }
        else {
            setIsShowFilterJobBar(true);
        }
    };

    const handleFigureEyesFloating = (event) => {
        const eyes = document.querySelectorAll(".eye");

        eyes.forEach(eye => {
            const rect = eye.getBoundingClientRect();
            const eyeCenterX = rect.left + rect.width / 2;
            const eyeCenterY = rect.top + rect.height / 2;

            const angle = Math.atan2(event.clientY - eyeCenterY, event.clientX - eyeCenterX);
            const offsetX = Math.cos(angle) * 1.5; // 控制眼球偏移的幅度
            const offsetY = Math.sin(angle) * 1.5;

            eye.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
        });
    };


    const ref = useRef(null);
    const ref2 = useRef(null);



    useEffect(() => {
        handleEducationList();
        handleSalaryList();
        handleJobList();

        handleResize();
        window.addEventListener("resize", handleResize);
        document.addEventListener("mousemove", handleFigureEyesFloating);

        if (ref.current) {
            const f = ref.current.clientHeight;
            const proportion = f * 0.88;
            console.log(proportion);
            console.log(ref);
            // console.log(ref);
            // console.log(ref2);
        }

        return () => {
            window.removeEventListener("resize", handleResize);
            document.removeEventListener("mousemove", handleFigureEyesFloating);
        };
    }, []);

    useEffect(() => {
        if (ref.current) {
            console.log(ref.current.clientHeight);
        }
    }, [ref]);



    return (
        <div className="App">
            <Box className="character">
                <Grid className='row' container>
                    <Grid className="grid" item xs={10} sm={10} md={10} lg={9} xl={9}>
                        <div className="persona">
                            <img className="figureBackground" src={FigureBackground} />
                            <img className="figure" src={Figure} ref={ref} />
                            <img id="leftEye" className="eye" src={LeftEye} />
                            <img id="rightEye" className="eye" src={RightEye} />
                        </div>
                    </Grid>

                    <Grid className="grid" item xs={2} sm={2} md={2} lg={3} xl={3}>
                        <div className="welcome">
                            <img className="heeloo" src={Heeloo} />
                        </div>
                    </Grid>
                </Grid>
            </Box>

            <Box className="informationCard" ref={ref2}>
                <Container className="container" maxWidth='xl'>
                    <Grid className='row' container>
                        <Grid className="grid" item xs={12} sm={12} md={12} lg={12} xl={12}>
                            <Card className="card job">
                                <div className="titleGroup">
                                    <Typography className="title" variant="h5" component='div'>適合前端工程師的好工作</Typography>
                                </div>

                                {
                                    isShowFilterJobBar && (
                                        <div className="filterGroup">
                                            <Grid className='row' container>
                                                <Grid className='grid' item xs={7} sm={7} md={7} lg={7} xl={7}>
                                                    <div className="group">
                                                        <TextField
                                                            label="公司名稱"
                                                            defaultValue={companyNameInput}
                                                            placeholder="請輸入公司名稱"
                                                            variant="outlined"
                                                            sx={{
                                                                width: "100%"
                                                            }}
                                                            onChange={handleCompanyNameInput}
                                                        >
                                                        </TextField>
                                                    </div>
                                                </Grid>

                                                <Grid className='grid' item xs={2} sm={2} md={2} lg={2} xl={2}>
                                                    <div className="group">
                                                        <TextField
                                                            id="outlined-select-currency"
                                                            select
                                                            label="教育程度"
                                                            value={educationInput}
                                                            placeholder="Please select your currency"
                                                            variant="outlined"
                                                            sx={{
                                                                width: "100%"
                                                            }}
                                                            onChange={handleEducationInput}
                                                        >
                                                            <MenuItem value={"0"}>
                                                                不限
                                                            </MenuItem>

                                                            {
                                                                educationList.map((item, index) => {
                                                                    return (
                                                                        <MenuItem key={index} value={item.id}>
                                                                            {item.label}
                                                                        </MenuItem>
                                                                    );
                                                                })
                                                            }
                                                        </TextField>
                                                    </div>
                                                </Grid>

                                                <Grid className='grid' item xs={2} sm={2} md={2} lg={2} xl={2}>
                                                    <div className="group">
                                                        <TextField
                                                            id="outlined-select-currency"
                                                            select
                                                            label="薪水範圍"
                                                            value={salaryInput}
                                                            placeholder="Please select your currency"
                                                            variant="outlined"
                                                            sx={{
                                                                width: "100%"
                                                            }}
                                                            onChange={handleSalaryInput}
                                                        >
                                                            <MenuItem value={"0"}>
                                                                不限
                                                            </MenuItem>

                                                            {
                                                                salaryList.map((item, index) => {
                                                                    return (
                                                                        <MenuItem key={index} value={item.id}>
                                                                            {item.label}
                                                                        </MenuItem>
                                                                    );
                                                                })
                                                            }
                                                        </TextField>
                                                    </div>
                                                </Grid>

                                                <Grid className="grid" item xs={1} sm={1} md={1} lg={1} xl={1}>
                                                    <div className="group">
                                                        <Button
                                                            className="buttonSearch"
                                                            variant="contained"
                                                            color="success"
                                                            sx={{ width: "100%", height: "100%" }}
                                                            onClick={handleFilterJobs}
                                                        >
                                                            條件搜尋
                                                        </Button>
                                                    </div>
                                                </Grid>
                                            </Grid>
                                        </div>
                                    )
                                }

                                <div className="companyGroup">
                                    <Grid className='row' container>
                                        {
                                            jobFilterResult.length !== 0 ? ((
                                                showJobList.map((item, index) => {
                                                    return (
                                                        <Grid key={index} className="grid" item xs={12} sm={12} md={12} lg={4} xl={4}>
                                                            <Card className="card haveInformation">
                                                                <Typography
                                                                    className="companyName"
                                                                    variant="h5"
                                                                    component="div"
                                                                >
                                                                    {item.companyName}
                                                                </Typography>

                                                                <Typography
                                                                    className="jobTitle"
                                                                    variant="p"
                                                                    component="div"
                                                                >
                                                                    {item.jobTitle}
                                                                </Typography>

                                                                <Typography
                                                                    className="education"
                                                                    variant="p"
                                                                    component="div"
                                                                >
                                                                    {educationList[item.educationId - 1]?.label}
                                                                </Typography>

                                                                <Typography
                                                                    className="salary"
                                                                    variant="p"
                                                                    component="div"
                                                                >
                                                                    {salaryList[item.salaryId]?.label}
                                                                </Typography>

                                                                <TextEllipsis
                                                                    lines={2}
                                                                    tag={"p"}
                                                                    ellipsisChars={"..."}
                                                                    tagClass={"preview"}
                                                                    debounceTimeoutOnResize={200}
                                                                    useJsOnly={true}
                                                                >
                                                                    {item.preview}
                                                                </TextEllipsis>

                                                                <Button
                                                                    sx={{
                                                                        ":hover": {
                                                                            backgroundColor: "transparent"
                                                                        }
                                                                    }}
                                                                    className="viewDetails"
                                                                    onClick={() => handleGetJobId(index)}
                                                                >
                                                                    查看細節
                                                                </Button>
                                                            </Card>
                                                        </Grid>
                                                    );
                                                })
                                            )) : (
                                                <Grid className="grid" item xs={12} sm={12} md={12} lg={12} xl={12}>
                                                    <Card className="card noInformation">
                                                        無資料
                                                    </Card>
                                                </Grid>
                                            )
                                        }
                                    </Grid>
                                </div>

                                {
                                    jobFilterResult.length !== 0 && (
                                        <Grid className="pagination" item xs={12} sm={12} md={12} lg={12} xl={12}>
                                            <Pagination count={pageCount} page={page} boundaryCount={10} onChange={handleChangePaginationPage} />
                                        </Grid>
                                    )
                                }
                            </Card>
                        </Grid>
                    </Grid>
                </Container>
            </Box>

            <BootstrapDialog
                className="workDialog"
                onClose={handleClose}
                open={open}
            >
                <DialogTitle className="workDialogTitle" sx={{ m: 0, p: 2 }}>
                    詳細資訊
                </DialogTitle>

                <DialogContent className="workDialogContent" dividers>
                    {
                        jobIdInfo !== null && (
                            <Fragment>
                                <Typography className="title" variant="h5">
                                    {jobIdInfo.companyName}
                                </Typography>

                                <Swiper
                                    slidesPerView={"auto"}
                                    spaceBetween={30}
                                    pagination={{
                                        clickable: true,
                                    }}
                                    modules={[Pag]}
                                    className="mySwiper"
                                >
                                    {
                                        jobIdInfo.companyPhoto.map((item, index) => {
                                            return (
                                                <SwiperSlide key={index}>
                                                    <img src={item} />
                                                </SwiperSlide>
                                            );
                                        })
                                    }
                                </Swiper>

                                {
                                    parse(jobIdInfo.description)
                                }
                            </Fragment>
                        )
                    }
                </DialogContent>

                <DialogActions className="workDialogActions">
                    <Button
                        className="workDialogCloseButton"
                        autoFocus
                        onClick={handleClose}
                    >
                        關閉
                    </Button>
                </DialogActions>
            </BootstrapDialog>
        </div>
    );
};

export default App;
