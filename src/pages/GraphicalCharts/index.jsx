import React from "react";

import { Img, Input, Text, Line, List, Button } from "components";
import { CloseSVG } from "../../assets/images";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const GraphicalChartsPage = () => {
  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <div className="bg-gray_50_03 flex flex-col font-gilroy items-center justify-start mx-auto w-full">
        <div className="flex flex-col items-center justify-start w-full">
          <div className="bg-white_A700 flex flex-col items-center justify-start p-[22px] sm:px-5 w-full">
            <div className="flex flex-col items-center justify-start max-w-[1286px] mx-auto md:px-5 w-full">
              <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-full">
                <Img
                  src="images/img_group_5.svg"
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
                    src="images/img_profileimglarg_85X85.png"
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
                  <div className="flex flex-col items-start justify-start p-2 rounded-lg w-full">
                    <div className="flex flex-row gap-2 items-start justify-start my-[9px] w-[49%] md:w-full">
                      <Img
                        src="images/img_save.svg"
                        className="h-6 w-6"
                        alt="save"
                      />
                      <Text
                        className="font-semibold mt-[3px] text-blue_gray_700 text-left w-auto"
                        variant="body2"
                      >
                        Dashboard
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start p-2 w-full">
                    <div className="flex flex-row gap-2 items-end justify-start my-2 w-[45%] md:w-full">
                      <Img
                        src="images/img_dollaraltsoli.svg"
                        className="h-6 w-6"
                        alt="dollaraltSoli"
                      />
                      <Text
                        className="font-semibold mt-[5px] text-blue_gray_700 text-left w-auto"
                        variant="body2"
                      >
                        Payments
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start p-2 w-full">
                    <div className="flex flex-row gap-2 items-start justify-start my-[9px] w-[61%] md:w-full">
                      <Img
                        src="images/img_walletoutline.svg"
                        className="h-6 w-6"
                        alt="walletOutline"
                      />
                      <Text
                        className="font-semibold mt-[3px] text-blue_gray_700 text-left w-auto"
                        variant="body2"
                      >
                        Wallet & Cards
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-row gap-1.5 items-center justify-start pr-[17px] py-[17px] w-full">
                    <Line className="bg-blue_A700 h-6 w-0.5" />
                    <div className="flex flex-row gap-2 items-start justify-start w-[54%]">
                      <Img
                        src="images/img_userarrowsout.svg"
                        className="h-6 w-6"
                        alt="userarrowsOut"
                      />
                      <Text
                        className="font-semibold mt-[3px] text-blue_A700 text-left w-auto"
                        variant="body2"
                      >
                        Transactions
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start p-2 w-full">
                    <div className="flex flex-row gap-2 items-start justify-start my-2 w-[43%] md:w-full">
                      <Img
                        src="images/img_checkmark.svg"
                        className="h-6 w-6"
                        alt="checkmark"
                      />
                      <Text
                        className="font-semibold mt-1 text-blue_gray_700 text-left w-auto"
                        variant="body2"
                      >
                        Analytics
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start p-2 w-full">
                    <div className="flex flex-row gap-2 items-end justify-start my-2 w-[45%] md:w-full">
                      <Img
                        src="images/img_menu.svg"
                        className="h-6 w-6"
                        alt="menu"
                      />
                      <Text
                        className="font-semibold mt-[5px] text-blue_gray_700 text-left w-auto"
                        variant="body2"
                      >
                        Messages
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start p-2 w-full">
                    <div className="flex flex-row gap-2 items-start justify-start my-2 w-2/5 md:w-full">
                      <Img
                        src="images/img_settings.svg"
                        className="h-6 w-6"
                        alt="settings Two"
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
            <div className="flex flex-1 flex-col gap-[35px] items-start justify-start pt-[5px] w-full">
              <div className="flex flex-col gap-[37px] items-start justify-start w-[90%] md:w-full">
                <Text
                  className="font-semibold text-gray_900_01 text-left w-auto"
                  variant="body1"
                >
                  Transactions
                </Text>
                <div className="flex md:flex-col flex-row gap-6 items-center justify-between w-full">
                  <div className="bg-white_A700 flex md:flex-1 flex-col items-center justify-start mb-[3px] p-6 sm:px-5 rounded-md w-[36%] md:w-full">
                    <div className="flex flex-row gap-[13px] items-center justify-start w-full">
                      <div className="flex flex-col gap-6 items-start justify-start pr-1 py-1 w-auto">
                        <Text
                          className="font-medium text-blue_A700 text-left w-auto"
                          variant="body2"
                        >
                          Total Balance
                        </Text>
                        <Text
                          className="font-bold mb-1.5 text-blue_A700 text-left w-auto"
                          as="h1"
                          variant="h1"
                        >
                          $40,241
                        </Text>
                      </div>
                      <div classname="!w-[70px] h-[70px] my-[11px] overflow-visible">
                        <CircularProgressbar
                          className="!w-[70px] h-[70px] my-[11px] overflow-visible"
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
                  <List
                    className="md:flex-1 sm:flex-col flex-row gap-6 grid sm:grid-cols-1 grid-cols-3 w-[62%] md:w-full"
                    orientation="horizontal"
                  >
                    <div className="bg-white_A700 flex flex-col gap-2.5 items-start justify-start sm:ml-[0] p-4 rounded-md shadow-bs2 w-full">
                      <div className="flex flex-row gap-2 items-start justify-start pr-[3px] py-[3px] w-full">
                        <Img
                          src="images/img_close.svg"
                          className="h-5 w-5"
                          alt="close"
                        />
                        <Text
                          className="font-medium text-blue_gray_900 text-left w-auto"
                          variant="body2"
                        >
                          Bitcoin
                        </Text>
                      </div>
                      <div className="flex flex-row items-center justify-start w-[94%] md:w-full">
                        <Text
                          className="font-bold text-blue_gray_900 text-left w-auto"
                          as="h6"
                          variant="h6"
                        >
                          15.47 BTC
                        </Text>
                        <div className="flex flex-row items-center justify-center pr-0.5 py-0.5 w-[39%]">
                          <Img
                            src="images/img_arrowdown_16X16.svg"
                            className="h-4 w-4"
                            alt="arrowdown"
                          />
                          <Text
                            className="font-normal mr-[13px] not-italic text-left text-red_700 w-auto"
                            variant="body5"
                          >
                            6.70
                          </Text>
                        </div>
                      </div>
                      <Img
                        src="images/img_chartsmicro.svg"
                        className="h-[45px] w-full"
                        alt="Chartsmicro"
                      />
                    </div>
                    <div className="bg-white_A700 flex flex-col gap-2.5 items-center justify-start sm:ml-[0] p-4 rounded-md shadow-bs2 w-full">
                      <div className="flex flex-row gap-2 items-center justify-start pr-[3px] py-[3px] w-full">
                        <Button
                          className="flex h-5 items-center justify-center rounded-[50%] w-5"
                          size="smIcn"
                          variant="icbFillBlack900"
                        >
                          <Img
                            src="images/img_mail.svg"
                            className=""
                            alt="mail"
                          />
                        </Button>
                        <Text
                          className="font-medium text-blue_gray_900 text-left w-auto"
                          variant="body2"
                        >
                          Ethereoum
                        </Text>
                      </div>
                      <div className="flex flex-row items-center justify-start w-[96%] md:w-full">
                        <Text
                          className="font-bold text-blue_gray_900 text-left w-auto"
                          as="h6"
                          variant="h6"
                        >
                          34.47 ETH
                        </Text>
                        <div className="flex flex-row items-center justify-center pr-0.5 py-0.5 w-[38%]">
                          <Img
                            src="images/img_arrowup.svg"
                            className="h-4 w-4"
                            alt="arrowup"
                          />
                          <Text
                            className="font-normal mr-3.5 not-italic text-green_600 text-left w-auto"
                            variant="body5"
                          >
                            5.67
                          </Text>
                        </div>
                      </div>
                      <Img
                        src="images/img_chartsmicro_blue_50.svg"
                        className="h-[45px] w-full"
                        alt="Chartsmicro One"
                      />
                    </div>
                    <div className="bg-white_A700 flex flex-col gap-2.5 items-center justify-start sm:ml-[0] p-4 rounded-md shadow-bs2 w-full">
                      <div className="flex flex-row gap-2 items-center justify-start pr-[3px] py-[3px] w-full">
                        <Button
                          className="flex h-5 items-center justify-center rounded-[50%] w-5"
                          size="smIcn"
                          variant="icbFillBlack900"
                        >
                          <Img
                            src="images/img_mail.svg"
                            className=""
                            alt="mail One"
                          />
                        </Button>
                        <Text
                          className="font-medium text-blue_gray_900 text-left w-auto"
                          variant="body2"
                        >
                          Ethereoum
                        </Text>
                      </div>
                      <div className="flex flex-row items-center justify-start w-[96%] md:w-full">
                        <Text
                          className="font-bold text-blue_gray_900 text-left w-auto"
                          as="h6"
                          variant="h6"
                        >
                          34.47 ETH
                        </Text>
                        <div className="flex flex-row items-center justify-center pr-0.5 py-0.5 w-[38%]">
                          <Img
                            src="images/img_arrowup.svg"
                            className="h-4 w-4"
                            alt="arrowup One"
                          />
                          <Text
                            className="font-normal mr-3.5 not-italic text-green_600 text-left w-auto"
                            variant="body5"
                          >
                            5.67
                          </Text>
                        </div>
                      </div>
                      <Img
                        src="images/img_chartsmicro_blue_50.svg"
                        className="h-[45px] w-full"
                        alt="Chartsmicro Two"
                      />
                    </div>
                  </List>
                </div>
              </div>
              <div className="flex flex-col gap-[37px] items-start justify-start w-full">
                <Text
                  className="font-semibold text-gray_900_01 text-left w-auto"
                  variant="body1"
                >
                  Recent Transaction
                </Text>
                <List
                  className="flex-col gap-4 grid items-center w-full"
                  orientation="vertical"
                >
                  <div className="flex flex-1 flex-row md:gap-10 items-start justify-between w-full">
                    <div className="flex flex-col gap-[9px] items-start justify-start pt-[3px] w-auto">
                      <div className="flex flex-row gap-4 items-start justify-start w-[88%] md:w-full">
                        <Img
                          src="images/img_refresh.svg"
                          className="h-6 mb-0.5 w-6"
                          alt="refresh"
                        />
                        <Text
                          className="font-semibold mt-1 text-black_900 text-left w-auto"
                          variant="body1"
                        >
                          Sync
                        </Text>
                      </div>
                      <Text
                        className="font-normal not-italic text-blue_gray_400 text-left w-auto"
                        variant="body2"
                      >
                        May, 16 2022
                      </Text>
                    </div>
                    <Text
                      className="font-bold mt-[5px] text-blue_A700 text-left w-auto"
                      variant="body1"
                    >
                      $2000
                    </Text>
                  </div>
                  <div className="flex flex-1 flex-row md:gap-10 items-start justify-between w-full">
                    <div className="flex flex-col gap-[9px] items-start justify-start pt-[3px] w-auto">
                      <div className="flex flex-row gap-4 items-start justify-start w-[88%] md:w-full">
                        <Img
                          src="images/img_refresh.svg"
                          className="h-6 mb-0.5 w-6"
                          alt="refresh One"
                        />
                        <Text
                          className="font-semibold mt-1 text-black_900 text-left w-auto"
                          variant="body1"
                        >
                          Sync
                        </Text>
                      </div>
                      <Text
                        className="font-normal not-italic text-blue_gray_400 text-left w-auto"
                        variant="body2"
                      >
                        May, 16 2022
                      </Text>
                    </div>
                    <Text
                      className="font-bold mt-[5px] text-blue_A700 text-left w-auto"
                      variant="body1"
                    >
                      $2000
                    </Text>
                  </div>
                  <div className="flex flex-1 flex-row md:gap-10 items-start justify-between w-full">
                    <div className="flex flex-col gap-[9px] items-start justify-start pt-[3px] w-auto">
                      <div className="flex flex-row gap-4 items-start justify-start w-[88%] md:w-full">
                        <Img
                          src="images/img_refresh.svg"
                          className="h-6 mb-0.5 w-6"
                          alt="refresh Two"
                        />
                        <Text
                          className="font-semibold mt-1 text-black_900 text-left w-auto"
                          variant="body1"
                        >
                          Sync
                        </Text>
                      </div>
                      <Text
                        className="font-normal not-italic text-blue_gray_400 text-left w-auto"
                        variant="body2"
                      >
                        May, 16 2022
                      </Text>
                    </div>
                    <Text
                      className="font-bold mt-[5px] text-blue_A700 text-left w-auto"
                      variant="body1"
                    >
                      $2000
                    </Text>
                  </div>
                  <div className="flex flex-1 flex-row md:gap-10 items-start justify-between w-full">
                    <div className="flex flex-col gap-[9px] items-start justify-start pt-[3px] w-auto">
                      <div className="flex flex-row gap-4 items-start justify-start w-[88%] md:w-full">
                        <Img
                          src="images/img_refresh.svg"
                          className="h-6 mb-0.5 w-6"
                          alt="refresh Three"
                        />
                        <Text
                          className="font-semibold mt-1 text-black_900 text-left w-auto"
                          variant="body1"
                        >
                          Sync
                        </Text>
                      </div>
                      <Text
                        className="font-normal not-italic text-blue_gray_400 text-left w-auto"
                        variant="body2"
                      >
                        May, 16 2022
                      </Text>
                    </div>
                    <Text
                      className="font-bold mt-[5px] text-blue_A700 text-left w-auto"
                      variant="body1"
                    >
                      $2000
                    </Text>
                  </div>
                  <div className="flex flex-1 flex-row md:gap-10 items-start justify-between w-full">
                    <div className="flex flex-col gap-[9px] items-start justify-start pt-[3px] w-auto">
                      <div className="flex flex-row gap-4 items-start justify-start w-[88%] md:w-full">
                        <Img
                          src="images/img_refresh.svg"
                          className="h-6 mb-0.5 w-6"
                          alt="refresh Four"
                        />
                        <Text
                          className="font-semibold mt-1 text-black_900 text-left w-auto"
                          variant="body1"
                        >
                          Sync
                        </Text>
                      </div>
                      <Text
                        className="font-normal not-italic text-blue_gray_400 text-left w-auto"
                        variant="body2"
                      >
                        May, 16 2022
                      </Text>
                    </div>
                    <Text
                      className="font-bold mt-[5px] text-blue_A700 text-left w-auto"
                      variant="body1"
                    >
                      $2000
                    </Text>
                  </div>
                  <div className="flex flex-1 flex-row md:gap-10 items-start justify-between w-full">
                    <div className="flex flex-col gap-[9px] items-start justify-start pt-[3px] w-auto">
                      <div className="flex flex-row gap-4 items-start justify-start w-[88%] md:w-full">
                        <Img
                          src="images/img_refresh.svg"
                          className="h-6 mb-0.5 w-6"
                          alt="refresh Five"
                        />
                        <Text
                          className="font-semibold mt-1 text-black_900 text-left w-auto"
                          variant="body1"
                        >
                          Sync
                        </Text>
                      </div>
                      <Text
                        className="font-normal not-italic text-blue_gray_400 text-left w-auto"
                        variant="body2"
                      >
                        May, 16 2022
                      </Text>
                    </div>
                    <Text
                      className="font-bold mt-[5px] text-blue_A700 text-left w-auto"
                      variant="body1"
                    >
                      $2000
                    </Text>
                  </div>
                  <div className="flex flex-1 flex-row md:gap-10 items-start justify-between w-full">
                    <div className="flex flex-col gap-[9px] items-start justify-start pt-[3px] w-auto">
                      <div className="flex flex-row gap-4 items-start justify-start w-[88%] md:w-full">
                        <Img
                          src="images/img_refresh.svg"
                          className="h-6 mb-0.5 w-6"
                          alt="refresh Six"
                        />
                        <Text
                          className="font-semibold mt-1 text-black_900 text-left w-auto"
                          variant="body1"
                        >
                          Sync
                        </Text>
                      </div>
                      <Text
                        className="font-normal not-italic text-blue_gray_400 text-left w-auto"
                        variant="body2"
                      >
                        May, 16 2022
                      </Text>
                    </div>
                    <Text
                      className="font-bold mt-[5px] text-blue_A700 text-left w-auto"
                      variant="body1"
                    >
                      $2000
                    </Text>
                  </div>
                  <div className="flex flex-1 flex-row md:gap-10 items-start justify-between w-full">
                    <div className="flex flex-col gap-[9px] items-start justify-start pt-[3px] w-auto">
                      <div className="flex flex-row gap-4 items-start justify-start w-[88%] md:w-full">
                        <Img
                          src="images/img_refresh.svg"
                          className="h-6 mb-0.5 w-6"
                          alt="refresh Seven"
                        />
                        <Text
                          className="font-semibold mt-1 text-black_900 text-left w-auto"
                          variant="body1"
                        >
                          Sync
                        </Text>
                      </div>
                      <Text
                        className="font-normal not-italic text-blue_gray_400 text-left w-auto"
                        variant="body2"
                      >
                        May, 16 2022
                      </Text>
                    </div>
                    <Text
                      className="font-bold mt-[5px] text-blue_A700 text-left w-auto"
                      variant="body1"
                    >
                      $2000
                    </Text>
                  </div>
                </List>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GraphicalChartsPage;
