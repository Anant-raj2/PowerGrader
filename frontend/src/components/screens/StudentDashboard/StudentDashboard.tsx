const SideBar = (): JSX.Element => {
  return (
    <div className="relative w-[255px] h-[608px] bg-sidebar-bg">
      <div className="absolute top-[40px] left-[76px] opacity-70 font-bold-19px font-[number:var(--bold-19px-font-weight)] text-sidebar-gray text-[length:var(--bold-19px-font-size)] tracking-[var(--bold-19px-letter-spacing)] leading-[var(--bold-19px-line-height)] [font-style:var(--bold-19px-font-style)]">
        Power Grader
      </div>
      <div className="top-[128px] bg-[url(sheet.svg)] bg-cover bg-[50%_50%] absolute w-[255px] h-[56px] left-0">
        <div className="absolute w-[3px] h-[56px] top-0 left-0 bg-mainlightblue" />
        <div className="absolute w-[159px] top-[17px] left-[72px] font-regular-16px font-[number:var(--regular-16px-font-weight)] text-mainlightblue text-[length:var(--regular-16px-font-size)] tracking-[var(--regular-16px-letter-spacing)] leading-[var(--regular-16px-line-height)] [font-style:var(--regular-16px-font-style)]">
          Overview
        </div>
        <img
          className="absolute w-[16px] h-[16px] top-[20px] left-[32px]"
          alt="Icon sidebar active"
          src="1-overview.svg"
        />
      </div>
      <div className="top-[240px] absolute w-[255px] h-[56px] left-0">
        <div className="absolute w-[159px] top-[17px] left-[72px] font-regular-16px font-[number:var(--regular-16px-font-weight)] text-sidebar-gray text-[length:var(--regular-16px-font-size)] tracking-[var(--regular-16px-letter-spacing)] leading-[var(--regular-16px-line-height)] [font-style:var(--regular-16px-font-style)]">
          Transcript
        </div>
        <img
          className="absolute w-[16px] h-[16px] top-[20px] left-[32px]"
          alt="Icon sidebar"
          src="2-tickets.svg"
        />
      </div>
      <div className="absolute w-[32px] h-[32px] top-[37px] left-[16px] bg-mainblue rounded-[16px]">
        <div className="relative w-[48px] h-[48px] top-[-8px] -left-px rounded-[24px]">
          <img
            className="absolute w-[12px] h-[14px] top-[17px] left-[12px]"
            alt="D"
            src="d.svg"
          />
          <div className="absolute w-[48px] h-[48px] top-0 left-0 bg-mainblue rounded-[24px]">
            <img
              className="absolute w-[78px] h-[78px] top-[-15px] left-[-15px]"
              alt="Pg white"
              src="PG-white-1.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const MainContent = (): JSX.Element => {
  return (
    <div className="w-[1257px] h-[982px]">
      <img
        className="fixed w-[1257px] h-[982px] top-0 left-0 object-cover"
        alt="Bg"
        src="bg.svg"
      />
      <div className="relative w-[1194px] h-[44px]">
        <div className="absolute w-[245px] top-[12px] left-[910px] [font-family:'Mulish-SemiBold',Helvetica] font-semibold text-grayscale-black text-[20px] text-right tracking-[0.20px] leading-[20px] whitespace-nowrap">
          Welcome&nbsp;&nbsp;Anant Raj
        </div>
        <div className="absolute w-[843px] top-[5px] left-0 font-bold-24px font-[number:var(--bold-24px-font-weight)] text-grayscale-black text-[length:var(--bold-24px-font-size)] tracking-[var(--bold-24px-letter-spacing)] leading-[var(--bold-24px-line-height)] [font-style:var(--bold-24px-font-style)]">
          Overview
        </div>
      </div>
      <div className="relative w-[1194px] h-[134px]">
        <div className="absolute w-[280px] h-[134px] top-0 left-0">
          <div className="bg-grayscale-white rounded-[8px] border border-solid border-grayscale-divider relative w-[276px] h-[134px]">
            <div className="absolute w-[212px] top-[23px] left-[31px] font-bold-19px font-[number:var(--bold-19px-font-weight)] text-grayscale-gray text-[length:var(--bold-19px-font-size)] text-center tracking-[var(--bold-19px-letter-spacing)] leading-[var(--bold-19px-line-height)] [font-style:var(--bold-19px-font-style)]">
              Unweighted GPA
            </div>
            <div className="top-[59px] left-[31px] text-grayscale-black absolute w-[212px] font-bold-40px font-[number:var(--bold-40px-font-weight)] text-[length:var(--bold-40px-font-size)] text-center tracking-[var(--bold-40px-letter-spacing)] leading-[var(--bold-40px-line-height)] [font-style:var(--bold-40px-font-style)]">
              3.33
            </div>
          </div>
        </div>
        <div className="left-[612px] absolute w-[280px] h-[134px] top-0">
          <div className="bg-grayscale-white rounded-[8px] border border-solid border-grayscale-divider relative w-[276px] h-[134px]">
            <div className="absolute w-[212px] top-[23px] left-[31px] font-bold-19px font-[number:var(--bold-19px-font-weight)] text-grayscale-gray text-[length:var(--bold-19px-font-size)] text-center tracking-[var(--bold-19px-letter-spacing)] leading-[var(--bold-19px-line-height)] [font-style:var(--bold-19px-font-style)]">
              Class Rank
            </div>
            <div className="absolute w-[212px] top-[59px] left-[31px] font-bold-40px font-[number:var(--bold-40px-font-weight)] text-grayscale-black text-[length:var(--bold-40px-font-size)] text-center tracking-[var(--bold-40px-letter-spacing)] leading-[var(--bold-40px-line-height)] [font-style:var(--bold-40px-font-style)]">
              87
            </div>
          </div>
        </div>
        <div className="left-[918px] absolute w-[280px] h-[134px] top-0">
          <div className="bg-grayscale-white rounded-[8px] border border-solid border-grayscale-divider relative w-[276px] h-[134px]">
            <div className="absolute w-[212px] top-[23px] left-[31px] font-bold-19px font-[number:var(--bold-19px-font-weight)] text-grayscale-gray text-[length:var(--bold-19px-font-size)] text-center tracking-[var(--bold-19px-letter-spacing)] leading-[var(--bold-19px-line-height)] [font-style:var(--bold-19px-font-style)]">
              Rating
            </div>
            <div className="absolute w-[212px] top-[59px] left-[31px] font-bold-40px font-[number:var(--bold-40px-font-weight)] text-grayscale-black text-[length:var(--bold-40px-font-size)] text-center tracking-[var(--bold-40px-letter-spacing)] leading-[var(--bold-40px-line-height)] [font-style:var(--bold-40px-font-style)]">
              Average
            </div>
          </div>
        </div>
        <div className="absolute w-[280px] h-[134px] top-0 left-[306px]">
          <div className="relative w-[276px] h-[134px]">
            <div className="absolute w-[276px] h-[134px] top-0 left-0">
              <div className="relative w-[280px] h-[138px] top-[-2px] left-[-2px] rounded-[8px] border-2 border-solid border-mainlightblue">
                <div className="w-[276px] h-[134px] bg-grayscale-white rounded-[8px] border border-solid border-mainblue" />
              </div>
            </div>
            <div className="absolute w-[212px] top-[24px] left-[32px] font-bold-19px font-[number:var(--bold-19px-font-weight)] text-mainblue text-[length:var(--bold-19px-font-size)] text-center tracking-[var(--bold-19px-letter-spacing)] leading-[var(--bold-19px-line-height)] [font-style:var(--bold-19px-font-style)]">
              Weighted GPA
            </div>
            <div className="top-[60px] left-[32px] text-mainblue absolute w-[212px] font-bold-40px font-[number:var(--bold-40px-font-weight)] text-[length:var(--bold-40px-font-size)] text-center tracking-[var(--bold-40px-letter-spacing)] leading-[var(--bold-40px-line-height)] [font-style:var(--bold-40px-font-style)]">
              3.6
            </div>
            <img
              className="absolute w-[16px] h-[16px] top-[102px] left-[228px]"
              alt="Icon cursor pointing"
              src="pointing-hand.svg"
            />
          </div>
        </div>
      </div>
      <div className="relative w-[1194px] h-[546px] bg-grayscale-white rounded-[8px] overflow-hidden border border-solid border-grayscale-divider">
        <div className="absolute w-[400px] top-[30px] left-[31px] font-bold-19px font-[number:var(--bold-19px-font-weight)] text-grayscale-black text-[length:var(--bold-19px-font-size)] tracking-[var(--bold-19px-letter-spacing)] leading-[var(--bold-19px-line-height)] [font-style:var(--bold-19px-font-style)]">
          Your Overview
        </div>
        <p className="absolute w-[400px] top-[62px] left-[31px] font-regular-12px font-[number:var(--regular-12px-font-weight)] text-grayscale-gray text-[length:var(--regular-12px-font-size)] tracking-[var(--regular-12px-letter-spacing)] leading-[var(--regular-12px-line-height)] whitespace-nowrap [font-style:var(--regular-12px-font-style)]">
          as of 25 May 2019, 09:41 PM
        </p>
        <div className="absolute w-[342px] h-[546px] -top-px left-[851px]">
          <div className="relative h-[546px]">
            <div className="absolute w-[278px] top-[31px] left-[32px] font-semibold-16px font-[number:var(--semibold-16px-font-weight)] text-grayscale-gray text-[length:var(--semibold-16px-font-size)] text-center tracking-[var(--semibold-16px-letter-spacing)] leading-[var(--semibold-16px-line-height)] [font-style:var(--semibold-16px-font-style)]">
              Worst Class
            </div>
            <div className="absolute w-[278px] top-[59px] left-[32px] font-bold-24px font-[number:var(--bold-24px-font-weight)] text-grayscale-black text-[length:var(--bold-24px-font-size)] text-center tracking-[var(--bold-24px-letter-spacing)] leading-[var(--bold-24px-line-height)] [font-style:var(--bold-24px-font-style)]">
              English
            </div>
            <div className="absolute w-[342px] h-[546px] top-0 left-0">
              <img
                className="w-px h-[546px] top-0 absolute left-0"
                alt="Divider line"
                src="vertical.svg"
              />
              <img
                className="w-[342px] h-px top-[114px] object-cover absolute left-0"
                alt="Divider line"
                src="horizontal.svg"
              />
              <img
                className="top-[220px] absolute w-[342px] h-px left-0 object-cover"
                alt="Divider line"
                src="image.svg"
              />
              <img
                className="top-[326px] absolute w-[342px] h-px left-0 object-cover"
                alt="Divider line"
                src="horizontal-2.svg"
              />
              <img
                className="top-[432px] absolute w-[342px] h-px left-0 object-cover"
                alt="Divider line"
                src="horizontal-3.svg"
              />
            </div>
            <div className="absolute w-[278px] top-[137px] left-[32px] font-semibold-16px font-[number:var(--semibold-16px-font-weight)] text-grayscale-gray text-[length:var(--semibold-16px-font-size)] text-center tracking-[var(--semibold-16px-letter-spacing)] leading-[var(--semibold-16px-line-height)] [font-style:var(--semibold-16px-font-style)]">
              Best Class
            </div>
            <div className="absolute w-[278px] top-[234px] left-[32px] font-semibold-16px font-[number:var(--semibold-16px-font-weight)] text-grayscale-gray text-[length:var(--semibold-16px-font-size)] text-center tracking-[var(--semibold-16px-letter-spacing)] leading-[var(--semibold-16px-line-height)] [font-style:var(--semibold-16px-font-style)]">
              Grade Level
            </div>
            <div className="absolute w-[278px] top-[165px] left-[32px] font-bold-24px font-[number:var(--bold-24px-font-weight)] text-grayscale-black text-[length:var(--bold-24px-font-size)] text-center tracking-[var(--bold-24px-letter-spacing)] leading-[var(--bold-24px-line-height)] [font-style:var(--bold-24px-font-style)]">
              AP Gov
            </div>
            <div className="absolute w-[278px] top-[271px] left-[32px] font-bold-24px font-[number:var(--bold-24px-font-weight)] text-grayscale-black text-[length:var(--bold-24px-font-size)] text-center tracking-[var(--bold-24px-letter-spacing)] leading-[var(--bold-24px-line-height)] [font-style:var(--bold-24px-font-style)]">
              11th
            </div>
            <div className="absolute w-[278px] top-[349px] left-[32px] font-semibold-16px font-[number:var(--semibold-16px-font-weight)] text-grayscale-gray text-[length:var(--semibold-16px-font-size)] text-center tracking-[var(--semibold-16px-letter-spacing)] leading-[var(--semibold-16px-line-height)] [font-style:var(--semibold-16px-font-style)]">
              Weighted Classes
            </div>
            <div className="absolute w-[278px] top-[377px] left-[32px] font-bold-24px font-[number:var(--bold-24px-font-weight)] text-grayscale-black text-[length:var(--bold-24px-font-size)] text-center tracking-[var(--bold-24px-letter-spacing)] leading-[var(--bold-24px-line-height)] [font-style:var(--bold-24px-font-style)]">
              5
            </div>
            <div className="absolute w-[278px] top-[455px] left-[32px] font-semibold-16px font-[number:var(--semibold-16px-font-weight)] text-grayscale-gray text-[length:var(--semibold-16px-font-size)] text-center tracking-[var(--semibold-16px-letter-spacing)] leading-[var(--semibold-16px-line-height)] [font-style:var(--semibold-16px-font-style)]">
              Unweighted Classes
            </div>
            <div className="absolute w-[278px] top-[483px] left-[32px] font-bold-24px font-[number:var(--bold-24px-font-weight)] text-grayscale-black text-[length:var(--bold-24px-font-size)] text-center tracking-[var(--bold-24px-letter-spacing)] leading-[var(--bold-24px-line-height)] [font-style:var(--bold-24px-font-style)]">
              3
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export const StudentDashboard = (): JSX.Element => {
  return (
    <div className="flex h-screen">
      <SideBar />
      <MainContent />
    </div>
  );
};
