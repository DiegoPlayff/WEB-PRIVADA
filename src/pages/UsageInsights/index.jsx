import React from "react";

import { Img, Input, Text, Line, List } from "components";
import { CloseSVG } from "../../assets/images";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const UsageInsightsPage = () => {
  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <div className="bg-gray_50_02 flex flex-col font-gilroy items-center justify-start mx-auto w-full">
        <div className="flex flex-col items-center justify-start w-full">
          <div className="bg-white_A700 flex flex-col items-center justify-start p-[22px] sm:px-5 w-full">
            <div className="flex flex-col items-center justify-start max-w-[1286px] mx-auto md:px-5 w-full">
              <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-full">
                <Img
                  src="images/img_group_6.svg"
                  className="h-[35px] w-[13%]"
                  alt="Group"
                />
                <Input
                  value={inputvalue}
                  onChange={(e) => setInputvalue(e)}
                  wrapClassName="flex md:flex-1 gap-3 md:ml-[0] ml-[101px] md:mt-0 my-1.5 w-[32%] md:w-full"
                  className="font-medium p-0 placeholder:text-blue_gray_200 text-base text-blue_gray_200 text-left w-full"
                  name="InputField"
                  placeholder="Search"
                  prefix={
                    <Img
                      src="images/img_search.svg"
                      className="cursor-pointer m-3"
                      alt="search"
                    />
                  }
                  suffix={
                    <CloseSVG
                      fillColor="#bac1ce"
                      className="cursor-pointer my-auto"
                      onClick={() => setInputvalue("")}
                      style={{
                        visibility:
                          inputvalue?.length <= 0 ? "hidden" : "visible",
                      }}
                      height={20}
                      width={20}
                      viewBox="0 0 20 20"
                    />
                  }
                  shape="srcRoundedBorder6"
                  size="smSrc"
                  variant="srcOutlineBluegray300"
                ></Input>
                <div className="bg-white_A700 border border-blue_gray_100 border-solid flex flex-col font-opensans h-14 items-end justify-start md:ml-[0] ml-[480px] p-2 rounded-[50%] w-14">
                  <div className="md:h-9 h-[35px] mb-1 relative w-9">
                    <Img
                      src="images/img_notification.svg"
                      className="absolute bottom-[0] h-8 left-[0] w-8"
                      alt="notification"
                    />
                    <Text
                      className="absolute bg-red_700 border border-blue_gray_50 border-solid font-semibold h-[18px] pb-[5px] pt-0.5 px-[5px] right-[0] rounded-[50%] text-left text-white_A700 top-[0] w-[18px]"
                      variant="body5"
                    >
                      2
                    </Text>
                  </div>
                </div>
                <div className="border border-blue_A700_01 border-solid flex flex-col h-14 items-center justify-start ml-6 md:ml-[0] p-1 rounded-[50%] w-14">
                  <Img
                    src="images/img_profileimglarg.png"
                    className="h-12 md:h-auto rounded-[50%] w-12"
                    alt="ProfileImgLarg"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex md:flex-col flex-row gap-8 items-center justify-between max-w-[1408px] mx-auto md:px-5 w-full">
            <aside className="flex flex-col md:hidden justify-start w-[300px]">
              <div className="bg-white_A700 flex flex-col md:gap-10 gap-[375px] items-center justify-end p-[5px] w-full">
                <div className="flex flex-col gap-2 items-center justify-start mt-[19px] w-[87%] md:w-full">
                  <div className="flex flex-row gap-1.5 items-center justify-start pr-[17px] py-[17px] w-full">
                    <Line className="bg-blue_A700 h-6 w-0.5" />
                    <div className="flex flex-row gap-2 items-start justify-start w-[49%]">
                      <Img
                        src="images/img_minimize.svg"
                        className="h-6 w-6"
                        alt="minimize"
                      />
                      <Text
                        className="font-semibold mt-[3px] text-blue_A700 text-left w-auto"
                        variant="body2"
                      >
                        Dashboard
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start p-2 w-full">
                    <div className="flex flex-row gap-2 items-start justify-start my-[9px] w-[31%] md:w-full">
                      <Img
                        src="images/img_user.svg"
                        className="h-6 w-6"
                        alt="user"
                      />
                      <Text
                        className="font-semibold mt-[3px] text-blue_gray_700 text-left w-auto"
                        variant="body2"
                      >
                        Users
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start p-2 w-full">
                    <div className="flex flex-row gap-2 items-start justify-start my-2 w-[49%] md:w-full">
                      <Img
                        src="images/img_grid.svg"
                        className="h-6 w-6"
                        alt="grid"
                      />
                      <Text
                        className="font-semibold mt-[5px] text-blue_gray_700 text-left w-auto"
                        variant="body2"
                      >
                        Categories
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start p-2 w-full">
                    <div className="flex flex-row gap-2 items-start justify-start my-[9px] w-[31%] md:w-full">
                      <Img
                        src="images/img_edit_24X24.svg"
                        className="h-6 w-6"
                        alt="edit"
                      />
                      <Text
                        className="font-semibold mt-[3px] text-blue_gray_700 text-left w-auto"
                        variant="body2"
                      >
                        Items
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start p-2 w-full">
                    <div className="flex flex-row gap-2 items-start justify-start my-[9px] w-[35%] md:w-full">
                      <Img
                        src="images/img_bag.svg"
                        className="h-6 w-6"
                        alt="bag"
                      />
                      <Text
                        className="font-semibold mt-[3px] text-blue_gray_700 text-left w-auto"
                        variant="body2"
                      >
                        Orders
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start p-2 w-full">
                    <div className="flex flex-row gap-2 items-start justify-start my-2 w-[42%] md:w-full">
                      <Img
                        src="images/img_ticket.svg"
                        className="h-6 w-6"
                        alt="ticket"
                      />
                      <Text
                        className="font-semibold mt-1 text-blue_gray_700 text-left w-auto"
                        variant="body2"
                      >
                        Coupons
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start p-2 w-full">
                    <div className="flex flex-row gap-2 items-start justify-start my-[9px] w-[54%] md:w-full">
                      <Img
                        src="images/img_notification.svg"
                        className="h-6 w-6"
                        alt="notification One"
                      />
                      <Text
                        className="font-semibold mt-[3px] text-blue_gray_700 text-left w-auto"
                        variant="body2"
                      >
                        Notifications
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start p-2 w-full">
                    <div className="flex flex-row gap-2 items-start justify-start my-2 w-2/5 md:w-full">
                      <Img
                        src="images/img_settings.svg"
                        className="h-6 w-6"
                        alt="settings"
                      />
                      <Text
                        className="font-semibold mt-[5px] text-blue_gray_700 text-left w-auto"
                        variant="body2"
                      >
                        Settings
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col font-opensans items-start justify-start p-2 w-[87%] md:w-full">
                  <div className="flex flex-row gap-2 items-end justify-start my-2 w-[29%] md:w-full">
                    <Img
                      src="images/img_question.svg"
                      className="h-6 w-6"
                      alt="question"
                    />
                    <Text
                      className="font-semibold mt-[5px] text-blue_gray_700 text-left w-auto"
                      variant="body2"
                    >
                      Help
                    </Text>
                  </div>
                </div>
              </div>
            </aside>
            <div className="flex flex-1 flex-col gap-[38px] items-start justify-start w-full">
              <Text
                className="font-semibold text-gray_900_01 text-left w-auto"
                variant="body1"
              >
                Dashboard
              </Text>
              <div className="flex flex-col gap-8 items-center justify-start w-full">
                <List
                  className="sm:flex-col flex-row gap-6 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center w-full"
                  orientation="horizontal"
                >
                  <div className="bg-white_A700 flex flex-1 flex-col items-center justify-start sm:ml-[0] p-6 sm:px-5 rounded-md w-full">
                    <div className="flex flex-row gap-[13px] items-center justify-start w-full">
                      <div className="flex flex-col gap-[21px] items-start justify-start pr-1 py-1 w-auto">
                        <Text
                          className="font-medium text-blue_gray_400 text-left w-auto"
                          variant="body2"
                        >
                          Total Users
                        </Text>
                        <Text
                          className="font-bold mb-[3px] text-gray_900_01 text-left w-auto"
                          as="h5"
                          variant="h5"
                        >
                          684
                        </Text>
                      </div>
                      <div classname="!w-[70px] h-[70px] overflow-visible">
                        <CircularProgressbar
                          className="!w-[70px] h-[70px] overflow-visible"
                          value={29}
                          counterClockwise
                          strokeWidth={24}
                          styles={{
                            trail: { strokeWidth: 24, stroke: "#0061ff" },
                            path: {
                              strokeLinecap: "square",
                              height: "100%",
                              transformOrigin: "center",
                              transform: "rotate(19deg)",
                              stroke: "#e0ebff",
                            },
                          }}
                        ></CircularProgressbar>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white_A700 flex flex-1 flex-col items-center justify-start sm:ml-[0] p-6 sm:px-5 rounded-md w-full">
                    <div className="flex flex-row gap-[13px] items-center justify-start w-full">
                      <div className="flex flex-col gap-[21px] items-start justify-start pr-1 py-1 w-auto">
                        <Text
                          className="font-medium text-blue_gray_400 text-left w-auto"
                          variant="body2"
                        >
                          Total Users
                        </Text>
                        <Text
                          className="font-bold mb-0.5 text-gray_900_01 text-left w-auto"
                          as="h5"
                          variant="h5"
                        >
                          546
                        </Text>
                      </div>
                      <div classname="!w-[70px] h-[70px] overflow-visible">
                        <CircularProgressbar
                          className="!w-[70px] h-[70px] overflow-visible"
                          value={29}
                          counterClockwise
                          strokeWidth={24}
                          styles={{
                            trail: { strokeWidth: 24, stroke: "#349765" },
                            path: {
                              strokeLinecap: "square",
                              height: "100%",
                              transformOrigin: "center",
                              transform: "rotate(19deg)",
                              stroke: "#d2efe0",
                            },
                          }}
                        ></CircularProgressbar>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white_A700 flex flex-1 flex-col items-center justify-start sm:ml-[0] p-6 sm:px-5 rounded-md w-full">
                    <div className="flex flex-row gap-[13px] items-center justify-start w-full">
                      <div className="flex flex-col gap-[22px] items-start justify-start pr-1 py-1 w-auto">
                        <Text
                          className="font-medium text-blue_gray_400 text-left w-auto"
                          variant="body2"
                        >
                          Total Users
                        </Text>
                        <Text
                          className="font-bold text-gray_900_01 text-left w-auto"
                          as="h5"
                          variant="h5"
                        >
                          5,732
                        </Text>
                      </div>
                      <div classname="!w-[70px] h-[70px] overflow-visible">
                        <CircularProgressbar
                          className="!w-[70px] h-[70px] overflow-visible"
                          value={29}
                          counterClockwise
                          strokeWidth={24}
                          styles={{
                            trail: { strokeWidth: 24, stroke: "#ff6700" },
                            path: {
                              strokeLinecap: "square",
                              height: "100%",
                              transformOrigin: "center",
                              transform: "rotate(19deg)",
                              stroke: "#ffe1cc",
                            },
                          }}
                        ></CircularProgressbar>
                      </div>
                    </div>
                  </div>
                </List>
                <div className="flex md:flex-col flex-row gap-8 items-center justify-between w-full">
                  <div className="bg-white_A700 flex md:flex-1 flex-col gap-4 items-center justify-start p-6 sm:px-5 rounded-md w-[71%] md:w-full">
                    <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between w-full">
                      <Text
                        className="font-semibold text-gray_900_01 text-left w-auto"
                        variant="body1"
                      >
                        Total Revenue
                      </Text>
                      <div className="flex sm:flex-1 flex-row gap-8 items-center justify-between w-[41%] sm:w-full">
                        <div className="border border-blue_gray_400 border-solid flex flex-row gap-4 items-start justify-between w-[81%]">
                          <div className="flex flex-col gap-1 items-start justify-start self-stretch w-auto">
                            <div className="flex flex-col items-center justify-start p-2.5 w-full">
                              <Text
                                className="font-medium text-blue_A700 text-left w-auto"
                                variant="body2"
                              >
                                Yearly
                              </Text>
                            </div>
                            <Line className="bg-blue_A700 h-0.5 w-full" />
                          </div>
                          <div className="flex flex-col items-start justify-center self-stretch w-auto">
                            <Text
                              className="font-medium text-blue_gray_400 text-left w-auto"
                              variant="body2"
                            >
                              Monthly
                            </Text>
                          </div>
                          <div className="flex flex-col items-start justify-center self-stretch w-auto">
                            <Text
                              className="font-medium text-blue_gray_400 text-left w-auto"
                              variant="body2"
                            >
                              Daily
                            </Text>
                          </div>
                        </div>
                        <Img
                          src="images/img_overflowmenu_24X24.svg"
                          className="h-6 w-6"
                          alt="overflowmenu"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col gap-6 items-start justify-start w-full">
                      <div className="flex flex-row gap-6 items-center justify-start w-[36%] md:w-full">
                        <Text
                          className="font-bold text-gray_900_01 text-left w-auto"
                          as="h3"
                          variant="h3"
                        >
                          $236,535
                        </Text>
                        <div className="flex flex-row gap-3.5 items-center justify-between w-[46%]">
                          <Img
                            src="images/img_floatingicon.svg"
                            className="h-6 w-6"
                            alt="floatingicon"
                          />
                          <div className="flex flex-col items-start justify-start w-auto">
                            <Text
                              className="text-blue_A700 text-left w-auto"
                              variant="body3"
                            >
                              0.8%
                            </Text>
                            <Text
                              className="font-normal not-italic text-blue_gray_400 text-left w-auto"
                              variant="body5"
                            >
                              Than last Day
                            </Text>
                          </div>
                        </div>
                      </div>
                      <div className="flex md:flex-col flex-row gap-4 items-center justify-between w-full">
                        <div className="flex md:flex-1 flex-col gap-[17px] items-start justify-start pb-[5px] pl-[5px] w-auto md:w-full">
                          <Text
                            className="font-normal not-italic text-blue_gray_900 text-left w-auto"
                            variant="body4"
                          >
                            30K
                          </Text>
                          <Text
                            className="font-normal ml-0.5 md:ml-[0] not-italic text-blue_gray_900 text-left w-auto"
                            variant="body4"
                          >
                            25K
                          </Text>
                          <Text
                            className="font-normal not-italic text-blue_gray_900 text-left w-auto"
                            variant="body4"
                          >
                            20K
                          </Text>
                          <Text
                            className="font-normal ml-1 md:ml-[0] not-italic text-blue_gray_900 text-left w-auto"
                            variant="body4"
                          >
                            15K
                          </Text>
                          <Text
                            className="font-normal md:ml-[0] ml-[3px] not-italic text-blue_gray_900 text-left w-auto"
                            variant="body4"
                          >
                            10K
                          </Text>
                          <Text
                            className="font-normal h-4 md:ml-[0] ml-[9px] not-italic text-blue_gray_900 text-left w-auto"
                            variant="body4"
                          >
                            5K
                          </Text>
                          <Text
                            className="font-normal mb-[19px] ml-2 md:ml-[0] not-italic text-blue_gray_900 text-left w-auto"
                            variant="body4"
                          >
                            0K
                          </Text>
                        </div>
                        <div className="flex md:flex-1 flex-row gap-[30px] items-end justify-between w-[94%] md:w-full">
                          <div className="flex flex-col gap-2.5 items-center justify-start w-[5%]">
                            <div className="bg-blue_A700_01 h-[212px] rounded-[5px] w-full"></div>
                            <Text
                              className="font-normal not-italic text-blue_gray_900 text-left w-auto"
                              variant="body4"
                            >
                              Jan
                            </Text>
                          </div>
                          <div className="flex flex-col gap-2.5 items-center justify-start mt-[132px] w-[5%]">
                            <div className="bg-blue_A700_01 h-20 rounded-[5px] w-full"></div>
                            <Text
                              className="font-normal not-italic text-blue_gray_900 text-left w-auto"
                              variant="body4"
                            >
                              Feb
                            </Text>
                          </div>
                          <div className="flex flex-col gap-2.5 items-center justify-start mt-9 w-[5%]">
                            <div className="bg-blue_A700_01 h-44 rounded-[5px] w-full"></div>
                            <Text
                              className="font-normal not-italic text-blue_gray_900 text-left w-auto"
                              variant="body4"
                            >
                              Mar
                            </Text>
                          </div>
                          <div className="flex flex-col gap-2.5 items-center justify-start mt-[31px] w-[5%]">
                            <div className="bg-blue_A700_01 h-[181px] rounded-[5px] w-full"></div>
                            <Text
                              className="font-normal not-italic text-blue_gray_900 text-left w-auto"
                              variant="body4"
                            >
                              Apr
                            </Text>
                          </div>
                          <div className="flex flex-col gap-2.5 items-center justify-start mt-[157px] w-[5%]">
                            <div className="bg-blue_A700_01 h-[55px] rounded-[5px] w-full"></div>
                            <Text
                              className="font-normal not-italic text-blue_gray_900 text-left w-auto"
                              variant="body4"
                            >
                              May
                            </Text>
                          </div>
                          <div className="flex flex-col gap-2.5 items-center justify-start mt-[94px] w-[5%]">
                            <div className="bg-blue_A700_01 h-[118px] rounded-[5px] w-full"></div>
                            <Text
                              className="font-normal not-italic text-blue_gray_900 text-left w-auto"
                              variant="body4"
                            >
                              Jun
                            </Text>
                          </div>
                          <div className="flex flex-col gap-2.5 items-center justify-start mt-[49px] w-[5%]">
                            <div className="bg-blue_A700_01 h-[163px] rounded-[5px] w-full"></div>
                            <Text
                              className="font-normal not-italic text-blue_gray_900 text-left w-auto"
                              variant="body4"
                            >
                              Jul
                            </Text>
                          </div>
                          <div className="flex flex-col gap-2.5 items-center justify-start mt-[108px] w-[5%]">
                            <div className="bg-blue_A700_01 h-[104px] rounded-[5px] w-full"></div>
                            <Text
                              className="font-normal not-italic text-blue_gray_900 text-left w-auto"
                              variant="body4"
                            >
                              Aug
                            </Text>
                          </div>
                          <div className="flex flex-col gap-2.5 items-center justify-start mt-[91px] w-[5%]">
                            <div className="bg-blue_A700_01 h-[121px] rounded-[5px] w-full"></div>
                            <Text
                              className="font-normal not-italic text-blue_gray_900 text-left w-auto"
                              variant="body4"
                            >
                              Sep
                            </Text>
                          </div>
                          <div className="flex flex-col gap-2.5 items-center justify-start mt-[58px] w-[5%]">
                            <div className="bg-blue_A700_01 h-[154px] rounded-[5px] w-full"></div>
                            <Text
                              className="font-normal not-italic text-blue_gray_900 text-left w-auto"
                              variant="body4"
                            >
                              Oct
                            </Text>
                          </div>
                          <List
                            className="sm:flex-col flex-row gap-[30px] grid grid-cols-2 mt-[39px] w-[13%]"
                            orientation="horizontal"
                          >
                            <div className="flex flex-col gap-2.5 items-center justify-start w-full">
                              <div className="bg-blue_A700_01 h-[173px] rounded-[5px] w-full"></div>
                              <Text
                                className="font-normal not-italic text-blue_gray_900 text-left w-auto"
                                variant="body4"
                              >
                                Nov
                              </Text>
                            </div>
                            <div className="flex flex-col gap-2.5 items-center justify-start w-full">
                              <div className="bg-blue_A700_01 h-[173px] rounded-[5px] w-full"></div>
                              <Text
                                className="font-normal not-italic text-blue_gray_900 text-left w-auto"
                                variant="body4"
                              >
                                Des
                              </Text>
                            </div>
                          </List>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white_A700 flex md:flex-1 flex-col items-center justify-start p-6 sm:px-5 rounded-md w-[27%] md:w-full">
                    <div className="flex flex-col gap-[15px] items-center justify-start w-full">
                      <div className="flex flex-row items-start justify-between w-full">
                        <Text
                          className="font-semibold text-gray_900_01 text-left w-auto"
                          variant="body1"
                        >
                          Recent Customer
                        </Text>
                        <Img
                          src="images/img_overflowmenu_24X24.svg"
                          className="h-6 w-6"
                          alt="overflowmenu One"
                        />
                      </div>
                      <List
                        className="flex-col gap-[15px] grid items-center w-full"
                        orientation="vertical"
                      >
                        <div className="flex flex-1 flex-row gap-2.5 items-center justify-start md:pr-10 sm:pr-5 pr-[93px] w-full">
                          <Img
                            src="images/img_jankoferlicg.png"
                            className="h-10 md:h-auto object-cover rounded-[3px] w-10"
                            alt="jankoferlicG"
                          />
                          <div className="flex flex-col items-start justify-start w-auto">
                            <Text
                              className="font-medium text-gray_900_01 text-left w-auto"
                              variant="body4"
                            >
                              Benny Chagur
                            </Text>
                            <Text
                              className="font-normal not-italic text-blue_gray_400_01 text-left w-auto"
                              variant="body5"
                            >
                              Member
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-1 flex-row gap-2.5 items-center justify-start md:pr-10 sm:pr-5 pr-[93px] w-full">
                          <Img
                            src="images/img_studioportrait.png"
                            className="h-10 md:h-auto object-cover rounded-[3px] w-10"
                            alt="studioportrait"
                          />
                          <div className="flex flex-col items-start justify-start w-auto">
                            <Text
                              className="font-medium text-gray_900_01 text-left w-auto"
                              variant="body4"
                            >
                              Chynita Heree
                            </Text>
                            <Text
                              className="font-normal not-italic text-blue_gray_400_01 text-left w-auto"
                              variant="body5"
                            >
                              Member
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-1 flex-row gap-2.5 items-center justify-start md:pr-10 sm:pr-5 pr-[87px] w-full">
                          <Img
                            src="images/img_youngbeardedm.png"
                            className="h-10 md:h-auto object-cover rounded-[3px] w-10"
                            alt="youngbeardedm"
                          />
                          <div className="flex flex-col items-start justify-start w-auto">
                            <Text
                              className="font-medium text-gray_900_01 text-left w-auto"
                              variant="body4"
                            >
                              David Yers
                            </Text>
                            <Text
                              className="font-normal not-italic text-blue_gray_400_01 text-left w-auto"
                              variant="body5"
                            >
                              Regular Customer
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-1 flex-row gap-2.5 items-center justify-start md:pr-10 sm:pr-5 pr-[99px] w-full">
                          <Img
                            src="images/img_cheerfulindian.png"
                            className="h-10 md:h-auto object-cover rounded-[3px] w-10"
                            alt="cheerfulindian"
                          />
                          <div className="flex flex-col items-start justify-start w-auto">
                            <Text
                              className="font-medium text-gray_900_01 text-left w-auto"
                              variant="body4"
                            >
                              Hayder Jahid
                            </Text>
                            <Text
                              className="font-normal not-italic text-blue_gray_400_01 text-left w-auto"
                              variant="body5"
                            >
                              Member
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-1 flex-row gap-2.5 items-center justify-start md:pr-10 sm:pr-5 pr-[99px] w-full">
                          <Img
                            src="images/img_cheerfulindian.png"
                            className="h-10 md:h-auto object-cover rounded-[3px] w-10"
                            alt="cheerfulindian One"
                          />
                          <div className="flex flex-col items-start justify-start w-auto">
                            <Text
                              className="font-medium text-gray_900_01 text-left w-auto"
                              variant="body4"
                            >
                              Hayder Jahid
                            </Text>
                            <Text
                              className="font-normal not-italic text-blue_gray_400_01 text-left w-auto"
                              variant="body5"
                            >
                              Member
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-1 flex-row gap-2.5 items-center justify-start md:pr-10 sm:pr-5 pr-[99px] w-full">
                          <Img
                            src="images/img_cheerfulindian.png"
                            className="h-10 md:h-auto object-cover rounded-[3px] w-10"
                            alt="cheerfulindian Two"
                          />
                          <div className="flex flex-col items-start justify-start w-auto">
                            <Text
                              className="font-medium text-gray_900_01 text-left w-auto"
                              variant="body4"
                            >
                              Hayder Jahid
                            </Text>
                            <Text
                              className="font-normal not-italic text-blue_gray_400_01 text-left w-auto"
                              variant="body5"
                            >
                              Member
                            </Text>
                          </div>
                        </div>
                      </List>
                    </div>
                  </div>
                </div>
                <div className="flex md:flex-col flex-row gap-8 items-center justify-between w-full">
                  <div className="bg-white_A700 flex md:flex-1 flex-col items-center justify-end p-[23px] sm:px-5 rounded-md w-[49%] md:w-full">
                    <div className="flex flex-col gap-6 items-center justify-start w-full">
                      <div className="flex flex-row items-start justify-between w-full">
                        <Text
                          className="font-semibold text-black_900 text-left w-auto"
                          variant="body1"
                        >
                          Number of Orders
                        </Text>
                        <Img
                          src="images/img_overflowmenu_24X24.svg"
                          className="h-6 w-6"
                          alt="overflowmenu Two"
                        />
                      </div>
                      <div className="flex sm:flex-col flex-row font-montserrat sm:gap-5 items-start justify-start w-full">
                        <div className="flex sm:flex-1 flex-col items-start justify-start w-auto sm:w-full">
                          <Text
                            className="font-medium ml-0.5 md:ml-[0] rotate-[-1deg] text-black_900 text-left w-auto"
                            variant="body4"
                          >
                            10
                          </Text>
                          <Text
                            className="font-medium mt-3 rotate-[-1deg] text-black_900 text-left w-auto"
                            variant="body4"
                          >
                            75
                          </Text>
                          <Text
                            className="font-medium mt-3 rotate-[-1deg] text-black_900 text-left w-auto"
                            variant="body4"
                          >
                            50
                          </Text>
                          <Text
                            className="font-medium mt-3 rotate-[-1deg] text-black_900 text-left w-auto"
                            variant="body4"
                          >
                            25
                          </Text>
                          <Text
                            className="font-medium ml-0.5 md:ml-[0] mt-3 rotate-[-1deg] text-black_900 text-left w-auto"
                            variant="body4"
                          >
                            10
                          </Text>
                          <Text
                            className="font-medium ml-2 md:ml-[0] mt-3 rotate-[-1deg] text-black_900 text-left w-auto"
                            variant="body4"
                          >
                            0
                          </Text>
                        </div>
                        <div className="font-gilroy h-[171px] ml-1 sm:ml-[0] relative w-[95%] sm:w-full">
                          <Img
                            src="images/img_group9863.svg"
                            className="h-32 mt-1.5 mx-auto w-[94%]"
                            alt="Group9863"
                          />
                          <div className="absolute flex flex-col gap-[15px] h-full inset-[0] items-center justify-center m-auto w-full">
                            <Img
                              src="images/img_graphlines.svg"
                              className="h-[140px] rounded-[10px] w-[99%]"
                              alt="Graphlines"
                            />
                            <div className="flex flex-row items-center justify-between w-full">
                              <Text
                                className="font-normal not-italic rotate-[-1deg] text-black_900 text-left w-auto"
                                variant="body4"
                              >
                                Jan
                              </Text>
                              <Text
                                className="font-normal not-italic rotate-[-1deg] text-black_900 text-left w-auto"
                                variant="body4"
                              >
                                Feb
                              </Text>
                              <Text
                                className="font-normal not-italic rotate-[-1deg] text-black_900 text-left w-auto"
                                variant="body4"
                              >
                                Mar
                              </Text>
                              <Text
                                className="font-normal not-italic rotate-[-1deg] text-black_900 text-left w-auto"
                                variant="body4"
                              >
                                Apr
                              </Text>
                              <Text
                                className="font-normal not-italic rotate-[-1deg] text-black_900 text-left w-auto"
                                variant="body4"
                              >
                                May
                              </Text>
                              <Text
                                className="font-normal not-italic rotate-[-1deg] text-black_900 text-left w-auto"
                                variant="body4"
                              >
                                Jun
                              </Text>
                              <Text
                                className="font-normal not-italic rotate-[-1deg] text-black_900 text-left w-auto"
                                variant="body4"
                              >
                                July
                              </Text>
                              <Text
                                className="font-normal not-italic rotate-[-1deg] text-black_900 text-left w-auto"
                                variant="body4"
                              >
                                Aug
                              </Text>
                              <Text
                                className="font-normal not-italic rotate-[-1deg] text-black_900 text-left w-auto"
                                variant="body4"
                              >
                                Sept
                              </Text>
                              <Text
                                className="font-normal not-italic rotate-[-1deg] text-black_900 text-left w-auto"
                                variant="body4"
                              >
                                Nov
                              </Text>
                              <Text
                                className="font-normal not-italic rotate-[-1deg] text-black_900 text-left w-auto"
                                variant="body4"
                              >
                                Dec
                              </Text>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white_A700 flex md:flex-1 flex-col items-center justify-start p-6 sm:px-5 rounded-md w-[49%] md:w-full">
                    <div className="flex flex-col gap-6 items-start justify-start w-full">
                      <div className="flex flex-row items-start justify-between w-full">
                        <Text
                          className="font-semibold text-black_900 text-left w-auto"
                          variant="body1"
                        >
                          Referrals
                        </Text>
                        <Img
                          src="images/img_overflowmenu_24X24.svg"
                          className="h-6 w-6"
                          alt="overflowmenu Three"
                        />
                      </div>
                      <div className="flex sm:flex-col flex-row gap-[55px] items-center justify-start w-[95%] md:w-full">
                        <div className="flex flex-col gap-5 items-center justify-start w-1/2 sm:w-full">
                          <div className="flex flex-row items-center justify-between w-full">
                            <div className="flex flex-row gap-2.5 items-center justify-start w-auto">
                              <div className="bg-blue_A700 h-3 my-[3px] rounded-[50%] w-3"></div>
                              <Text
                                className="font-medium text-gray_900_01 text-left w-auto"
                                variant="body2"
                              >
                                Social Media
                              </Text>
                            </div>
                            <Text
                              className="font-medium text-blue_gray_400_01 text-left w-auto"
                              variant="body2"
                            >
                              20%
                            </Text>
                          </div>
                          <div className="flex flex-row items-center justify-between w-full">
                            <div className="flex flex-row gap-2.5 items-center justify-start w-auto">
                              <div className="bg-green_600 h-3 my-[3px] rounded-[50%] w-3"></div>
                              <Text
                                className="font-medium text-gray_900_01 text-left w-auto"
                                variant="body2"
                              >
                                Websites
                              </Text>
                            </div>
                            <Text
                              className="font-medium text-blue_gray_400_01 text-left w-auto"
                              variant="body2"
                            >
                              15%
                            </Text>
                          </div>
                          <div className="flex flex-row items-center justify-between w-full">
                            <div className="flex flex-row gap-2.5 items-center justify-start w-auto">
                              <div className="bg-orange_A700 h-3 my-[3px] rounded-[50%] w-3"></div>
                              <Text
                                className="font-medium text-gray_900_01 text-left w-auto"
                                variant="body2"
                              >
                                Others
                              </Text>
                            </div>
                            <Text
                              className="font-medium text-blue_gray_400_01 text-left w-auto"
                              variant="body2"
                            >
                              15%
                            </Text>
                          </div>
                        </div>
                        <div className="h-[171px] relative w-[171px]">
                          <div classname="!w-[171px] h-[171px] m-auto overflow-visible">
                            <CircularProgressbar
                              className="!w-[171px] h-[171px] m-auto overflow-visible"
                              value={34}
                              strokeWidth={4}
                              styles={{
                                trail: { strokeWidth: 4, stroke: "#0061ff" },
                                path: {
                                  strokeLinecap: "square",
                                  height: "100%",
                                  transformOrigin: "center",
                                  transform: "rotate(245deg)",
                                  stroke: "#eaecf0",
                                },
                              }}
                            ></CircularProgressbar>
                          </div>
                          <div className="absolute h-[132px] inset-[0] justify-center m-auto w-[132px]">
                            <div classname="!w-[132px] h-[132px] m-auto overflow-visible">
                              <CircularProgressbar
                                className="!w-[132px] h-[132px] m-auto overflow-visible"
                                value={43}
                                counterClockwise
                                strokeWidth={5}
                                styles={{
                                  trail: { strokeWidth: 5, stroke: "#349765" },
                                  path: {
                                    strokeLinecap: "square",
                                    height: "100%",
                                    transformOrigin: "center",
                                    transform: "rotate(12deg)",
                                    stroke: "#eaecf0",
                                  },
                                }}
                              ></CircularProgressbar>
                            </div>
                            <div className="absolute h-[94px] inset-[0] justify-center m-auto w-[94px]">
                              <div classname="!w-[94px] h-[94px] m-auto overflow-visible">
                                <CircularProgressbar
                                  className="!w-[94px] h-[94px] m-auto overflow-visible"
                                  value={52}
                                  counterClockwise
                                  strokeWidth={6}
                                  styles={{
                                    trail: {
                                      strokeWidth: 6,
                                      stroke: "#eaecf0",
                                    },
                                    path: {
                                      strokeLinecap: "square",
                                      height: "100%",
                                      transformOrigin: "center",
                                      transform: "rotate(180deg)",
                                      stroke: "#ff6700",
                                    },
                                  }}
                                ></CircularProgressbar>
                              </div>
                              <Text
                                className="absolute font-bold h-max inset-[0] justify-center m-auto text-blue_gray_400 text-left w-max"
                                variant="body1"
                              >
                                100%
                              </Text>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UsageInsightsPage;
