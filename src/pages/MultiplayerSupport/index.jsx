import React from "react";

import { Img, List, Text } from "components";

const MultiplayerSupportPage = () => {
  return (
    <>
      <div className="bg-gray_900_03 font-gilroy h-[1024px] mx-auto relative w-full">
        <div
          className="bg-cover bg-no-repeat flex flex-col h-full items-center justify-start m-auto w-full"
          style={{ backgroundImage: "url('images/img_group2232.png')" }}
        >
          <div className="bg-gray_900_04 h-[1024px] w-full"></div>
        </div>
        <div className="absolute bottom-[0] md:h-[1024px] h-[1944px] inset-x-[0] mx-auto pb-[920px] md:px-5 w-full">
          <Img
            src="images/img_group_1024X1440.png"
            className="h-[1024px] mx-auto object-cover w-full"
            alt="Group"
          />
          <List
            className="absolute flex-col md:gap-10 gap-[61px] grid inset-x-[0] items-center mx-auto top-[14%] w-[47%]"
            orientation="vertical"
          >
            <div className="flex flex-col items-center justify-start w-full">
              <div className="h-[175px] md:h-[214px] mb-[23px] mt-4 relative w-full">
                <div className="h-[175px] m-auto w-full">
                  <Img
                    src="images/img_vector.png"
                    className="h-[175px] m-auto object-cover w-full"
                    alt="Vector One"
                  />
                  <div
                    className="absolute bg-cover bg-no-repeat bottom-[3%] flex flex-col md:gap-10 gap-[105px] h-[155px] inset-x-[0] justify-start mx-auto px-4 w-[99%]"
                    style={{
                      backgroundImage: "url('images/img_group2233.png')",
                    }}
                  >
                    <Img
                      src="images/img_vector_18X141.png"
                      className="h-[18px] md:h-auto md:ml-[0] ml-[13px] object-cover w-[23%]"
                      alt="Vector One"
                    />
                    <Img
                      src="images/img_vector_18X141.png"
                      className="h-8 md:h-auto md:ml-[0] ml-[325px] object-cover w-[48%]"
                      alt="Vector Two"
                    />
                  </div>
                </div>
                <div className="absolute bottom-[3%] flex sm:flex-col flex-row sm:gap-10 items-end justify-between left-[6%] w-[82%]">
                  <Img
                    src="images/img_vector_18X141.png"
                    className="h-[7px] md:h-auto sm:mt-0 mt-[22px] object-cover w-auto sm:w-full"
                    alt="Vector Three"
                  />
                  <Text
                    className="not-italic text-left text-white_A700 uppercase w-auto"
                    as="h4"
                    variant="h4"
                  >
                    Single Player
                  </Text>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-start w-full">
              <div className="h-[175px] md:h-[214px] sm:h-[241px] mb-[23px] mt-4 relative w-full">
                <div className="h-[175px] sm:h-[202px] m-auto w-full">
                  <Img
                    src="images/img_vector.png"
                    className="h-[175px] m-auto object-cover w-full"
                    alt="Vector Two"
                  />
                  <div
                    className="absolute bg-cover bg-no-repeat bottom-[3%] flex flex-col h-[155px] inset-x-[0] items-center justify-start mx-auto px-4 w-[99%]"
                    style={{
                      backgroundImage: "url('images/img_group2234.png')",
                    }}
                  >
                    <div className="flex flex-col md:gap-10 gap-[105px] justify-start w-[98%] md:w-full">
                      <Img
                        src="images/img_vector_18X141.png"
                        className="h-[18px] md:h-auto object-cover w-[24%]"
                        alt="Vector One One"
                      />
                      <div className="flex sm:flex-col flex-row sm:gap-10 items-end justify-between ml-1.5 md:ml-[0] w-full">
                        <Img
                          src="images/img_vector_18X141.png"
                          className="sm:flex-1 h-[7px] md:h-auto sm:mt-0 mt-6 object-cover w-auto sm:w-full"
                          alt="Vector Two One"
                        />
                        <Img
                          src="images/img_vector_18X141.png"
                          className="md:flex-1 h-8 sm:h-auto object-cover w-auto md:w-full"
                          alt="Vector Three One"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <Text
                  className="absolute bottom-[3%] not-italic right-[13%] text-left text-white_A700 uppercase w-auto"
                  as="h4"
                  variant="h4"
                >
                  Multi Player
                </Text>
              </div>
            </div>
          </List>
        </div>
      </div>
    </>
  );
};

export default MultiplayerSupportPage;
