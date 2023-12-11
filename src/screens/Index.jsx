import { Fragment } from "react";

export default function Index() {
  const sidebarCategories = [""];

  const sidebarEnteries = [
    {
      category: "",
      icon: (
        <svg
          width="17"
          height="17"
          viewBox="0 0 17 17"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_165_12269)">
            <path d="M5.66667 0H2.125C1.56141 0 1.02091 0.223883 0.622398 0.622398C0.223883 1.02091 0 1.56141 0 2.125L0 5.66667H2.125L2.11013 7.79167L3.52679 7.79875L3.54167 5.66667H5.66667V3.53033L7.79167 3.54167L7.79875 2.125L5.66667 2.11367V0ZM4.25 4.25H1.41667V2.125C1.41667 1.93714 1.49129 1.75697 1.62413 1.62413C1.75697 1.49129 1.93714 1.41667 2.125 1.41667H4.25V4.25Z" />
            <path d="M14.8753 0H11.3336V2.125L9.21216 2.11367L9.20508 3.53033L11.3336 3.54167V5.66667H13.4692L13.4586 7.79167L14.8753 7.79875L14.8859 5.66667H17.0003V2.125C17.0003 1.56141 16.7764 1.02091 16.3779 0.622398C15.9794 0.223883 15.4389 0 14.8753 0V0ZM15.5836 4.25H12.7503V1.41667H14.8753C15.0631 1.41667 15.2433 1.49129 15.3762 1.62413C15.509 1.75697 15.5836 1.93714 15.5836 2.125V4.25Z" />
            <path d="M14.8905 9.21216L13.4739 9.20508L13.4625 11.3336H11.334V13.47L9.21253 13.4586L9.20898 14.8753L11.334 14.8866V17.0003H14.8756C15.4392 17.0003 15.9797 16.7764 16.3782 16.3779C16.7768 15.9794 17.0006 15.4389 17.0006 14.8753V11.3336H14.8756L14.8905 9.21216ZM15.584 14.8753C15.584 15.0631 15.5093 15.2433 15.3765 15.3762C15.2437 15.509 15.0635 15.5836 14.8756 15.5836H12.7506V12.7503H15.584V14.8753Z" />
            <path d="M5.66667 11.332H3.53104L3.54167 9.21057L2.125 9.20703L2.11437 11.332H0V14.8737C0 15.4373 0.223883 15.9778 0.622398 16.3763C1.02091 16.7748 1.56141 16.9987 2.125 16.9987H5.66667V14.8737L7.79167 14.8886L7.79875 13.4719L5.66667 13.4606V11.332ZM4.25 15.582H2.125C1.93714 15.582 1.75697 15.5074 1.62413 15.3746C1.49129 15.2417 1.41667 15.0616 1.41667 14.8737V12.7487H4.25V15.582Z" />
          </g>
          <defs>
            <clipPath id="clip0_165_12269">
              <rect width="17" height="17" fill="white" />
            </clipPath>
          </defs>
        </svg>
      ),
      name: "Dashboard",
      path: "/dashboard",
    },
    {
      category: "",
      icon: (
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.55428 0C8.85837 0 9.16246 0 9.46655 0C9.67561 0.0380756 9.88467 0.0761512 10.0937 0.095189C10.4168 0.152302 10.5689 0.285562 10.6259 0.590167C10.7779 1.59917 11.8232 2.18934 12.7355 1.82763C13.0016 1.7134 13.2106 1.80859 13.4007 2.03704C13.8758 2.58914 14.2369 3.19835 14.484 3.88371C14.598 4.20736 14.56 4.37869 14.3129 4.62619C14.1799 4.74041 14.0659 4.87368 13.9708 5.02598C13.5907 5.67327 13.7238 6.49189 14.2749 6.98687C14.579 7.2534 14.598 7.40571 14.465 7.78646C14.2179 8.45279 13.8758 9.062 13.4007 9.59505C13.1916 9.84255 13.0206 9.89966 12.6975 9.80447C11.6522 9.44275 10.7209 10.2043 10.6069 11.0229C10.5689 11.3275 10.3978 11.4608 10.0747 11.5179C9.90367 11.556 9.71362 11.575 9.54257 11.6131C9.54257 11.9748 9.54257 12.3175 9.54257 12.6792C9.61859 12.6792 9.69461 12.6792 9.77063 12.6792C11.9753 12.6792 14.1609 12.6792 16.3655 12.6792C16.7266 12.6792 16.9357 12.8886 16.9357 13.2503C16.9357 13.7453 16.9357 14.2403 16.9357 14.7353C16.9357 14.8495 16.9737 14.9066 17.0877 14.9637C17.3158 15.116 17.5439 15.2683 17.6959 15.4777C17.848 15.6681 17.905 15.9156 18 16.1441C18 16.2964 18 16.4487 18 16.601C17.924 16.8104 17.867 17.0198 17.7719 17.1911C17.4488 17.7432 16.9357 18.0098 16.2895 17.9527C15.6243 17.8955 15.1682 17.5529 14.9401 16.9246C14.655 16.106 14.9971 15.3254 15.7764 14.9447C15.8144 14.9256 15.8904 14.8685 15.8904 14.8305C15.8904 14.4687 15.8904 14.088 15.8904 13.7263C14.8261 13.7263 13.7618 13.7263 12.6975 13.7263C12.6975 14.0499 12.6975 14.3735 12.6975 14.6972C12.6975 14.8495 12.7355 14.9256 12.8685 14.9828C13.4387 15.2493 13.7808 15.8585 13.7428 16.4867C13.7048 17.115 13.2676 17.6861 12.6975 17.8765C12.0513 18.0859 11.3861 17.9146 10.968 17.4386C10.2648 16.62 10.5309 15.4206 11.5191 14.9637C11.5571 14.9447 11.6332 14.8876 11.6332 14.8495C11.6332 14.4687 11.6332 14.107 11.6332 13.7453C9.86566 13.7453 8.11716 13.7453 6.36866 13.7453C6.36866 14.088 6.36866 14.4116 6.36866 14.7162C6.36866 14.8685 6.40667 14.9256 6.5397 14.9828C7.2049 15.2874 7.566 16.0489 7.37595 16.7533C7.18589 17.4957 6.5207 17.9907 5.77949 17.9717C5.03827 17.9336 4.41109 17.3815 4.29706 16.6771C4.18303 15.9537 4.52513 15.2874 5.19032 14.9637C5.24733 14.9447 5.30435 14.8876 5.30435 14.8495C5.30435 14.4878 5.30435 14.107 5.30435 13.7453C4.24004 13.7453 3.17574 13.7453 2.11143 13.7453C2.11143 14.088 2.11143 14.4116 2.11143 14.7353C2.11143 14.8685 2.14944 14.9447 2.28248 15.0018C3.0427 15.3635 3.3848 16.2773 3.0427 17.0388C2.75762 17.6671 2.07342 18.0669 1.40823 17.9907C0.686023 17.8955 0.134864 17.3625 0.0208315 16.6581C-0.0932013 15.9727 0.267902 15.2874 0.933094 15.0018C1.02812 14.9637 1.06613 14.9066 1.06613 14.7924C1.06613 14.2974 1.06613 13.8215 1.06613 13.3265C1.06613 12.8886 1.25619 12.6982 1.69331 12.6982C3.87894 12.6982 6.06457 12.6982 8.2502 12.6982C8.32622 12.6982 8.38323 12.6982 8.45926 12.6982C8.45926 12.3175 8.45926 11.9748 8.45926 11.6321C8.2692 11.594 8.09815 11.575 7.9271 11.5369C7.60401 11.4798 7.45197 11.3465 7.39495 11.0419C7.26191 10.1281 6.25462 9.48082 5.30435 9.82351C5.00026 9.93773 4.82921 9.86159 4.60115 9.61409C4.12601 9.062 3.78391 8.45279 3.53684 7.76742C3.42281 7.42474 3.46082 7.27244 3.70789 7.00591C3.85993 6.85361 4.01198 6.68227 4.10701 6.47286C4.41109 5.86365 4.24004 5.10213 3.7459 4.64522C3.44181 4.35966 3.4038 4.22639 3.55585 3.8266C3.80292 3.17931 4.14502 2.58914 4.58214 2.05608C4.82921 1.75148 4.98126 1.73244 5.34236 1.82763C5.58943 1.88474 5.85551 1.92282 6.10258 1.88474C6.76777 1.78955 7.24291 1.27553 7.37595 0.609206C7.43296 0.266526 7.58501 0.133264 7.9271 0.0761501C8.15517 0.0761501 8.34522 0.0380756 8.55428 0ZM9.01042 3.19835C7.566 3.19835 6.36866 4.39773 6.38766 5.8446C6.38766 7.29148 7.566 8.47183 9.01042 8.47183C10.4548 8.49086 11.6522 7.29148 11.6522 5.8446C11.6332 4.39773 10.4358 3.19835 9.01042 3.19835Z"
            fill="currentColor"
          />
        </svg>
      ),
      name: "Products",
      path: "/dashboard/products",
    },
    {
      category: "",
      icon: (
        <svg
          width="14"
          height="18"
          viewBox="0 0 14 18"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M9.34786 1.87915C9.83985 1.87915 10.3318 1.85455 10.7992 1.87915C11.2666 1.90375 11.6356 2.34654 11.6602 2.81393C11.6602 3.08453 11.6602 3.35512 11.6602 3.62572C11.6602 6.35628 11.6602 9.06224 11.6602 11.7928C11.6602 11.8666 11.6602 11.9158 11.6602 12.0142C10.7992 11.965 10.0859 12.211 9.47086 12.7768C9.02807 13.2196 8.75747 13.7362 8.65907 14.3512C8.48687 15.5565 9.10186 16.8603 10.6024 17.3769C10.5286 17.3769 10.4794 17.3769 10.4548 17.3769C7.33069 17.3769 4.18194 17.3769 1.05778 17.3769C0.516592 17.3769 0.147597 17.1309 0.0245993 16.6635C-3.75727e-07 16.5651 0 16.4421 0 16.3191C0 11.842 0 7.38946 0 2.91233C0 2.24814 0.541192 1.82995 1.05778 1.85454C1.47598 1.87914 1.86957 1.85454 2.31237 1.85454C2.31237 1.92834 2.31237 1.97754 2.31237 2.05134C2.31237 2.32194 2.31237 2.56793 2.33697 2.83853C2.38616 3.33052 2.77976 3.69952 3.27175 3.69952C4.99373 3.69952 6.6911 3.69952 8.41308 3.69952C8.92967 3.69952 9.34786 3.25673 9.37246 2.74013C9.34786 2.46954 9.34786 2.19894 9.34786 1.87915ZM7.25689 8.05365C6.4697 8.05365 5.65792 8.05365 4.87073 8.05365C4.82153 8.05365 4.77233 8.05365 4.72313 8.05365C4.57553 8.07825 4.47713 8.17665 4.47713 8.32425C4.47713 8.47185 4.57553 8.54565 4.69853 8.57025C4.74773 8.57025 4.79693 8.57025 4.84613 8.57025C6.4451 8.57025 8.04408 8.57025 9.64306 8.57025C9.71686 8.57025 9.79066 8.57024 9.83985 8.54565C9.91365 8.47185 10.0121 8.39805 10.0121 8.29965C10.0121 8.22585 9.91365 8.12745 9.83985 8.05365C9.79066 8.02905 9.71686 8.02905 9.64306 8.02905C8.85587 8.05365 8.06868 8.05365 7.25689 8.05365ZM7.25689 11.2024C8.09328 11.2024 8.92967 11.2024 9.76606 11.2024C9.93825 11.2024 10.0613 11.104 10.0613 10.9318C10.0613 10.7842 9.96285 10.6858 9.79066 10.6858C8.11788 10.6858 6.4451 10.6858 4.79693 10.6858C4.72313 10.6858 4.60013 10.735 4.55093 10.8088C4.42793 10.981 4.57553 11.2024 4.82153 11.2024C5.60872 11.2024 6.42051 11.2024 7.25689 11.2024ZM7.25689 5.96268C8.06868 5.96268 8.85587 5.96268 9.66766 5.96268C9.71686 5.96268 9.76606 5.96268 9.81525 5.96268C9.96285 5.93808 10.0613 5.83968 10.0613 5.71669C10.0613 5.56909 9.96285 5.47069 9.81525 5.44609C9.76606 5.44609 9.69226 5.44609 9.64306 5.44609C8.06868 5.44609 6.4697 5.44609 4.89533 5.44609C4.82153 5.44609 4.74773 5.44609 4.69853 5.44609C4.52633 5.47069 4.45253 5.64289 4.52633 5.79049C4.57553 5.93808 4.69853 5.96268 4.82153 5.96268C5.63332 5.96268 6.4451 5.96268 7.25689 5.96268ZM2.23857 5.79049C2.16477 5.71669 2.14017 5.64289 2.06637 5.59369C1.94337 5.47069 1.79577 5.47069 1.69737 5.56909C1.59898 5.66749 1.57438 5.81509 1.69737 5.93809C1.79577 6.03648 1.89417 6.15948 2.01717 6.25788C2.18937 6.43008 2.31237 6.43008 2.48456 6.25788C2.73056 6.01189 3.00116 5.76589 3.24715 5.49529C3.39475 5.34769 3.39475 5.2001 3.29635 5.0771C3.17335 4.9541 3.02575 4.9787 2.87816 5.1263C2.65676 5.34769 2.45996 5.54449 2.23857 5.79049ZM2.23857 11.0056C2.16477 10.9318 2.14017 10.8826 2.09097 10.8334C1.96797 10.7104 1.79577 10.7104 1.69737 10.8088C1.57438 10.9318 1.57438 11.0548 1.72197 11.2024C1.82037 11.3008 1.91877 11.3992 2.01717 11.4976C2.18937 11.6698 2.31237 11.6698 2.48456 11.4976C2.73056 11.2516 3.00116 11.0056 3.24715 10.735C3.39475 10.5874 3.39475 10.4398 3.29635 10.3168C3.17335 10.1938 3.02575 10.2184 2.87816 10.366C2.65676 10.5628 2.45996 10.7842 2.23857 11.0056ZM2.23857 8.39805C2.16477 8.32425 2.14017 8.25045 2.06637 8.20125C1.94337 8.10285 1.79577 8.10285 1.69737 8.20125C1.59898 8.29965 1.57438 8.44725 1.69737 8.57025C1.79577 8.66864 1.89417 8.76705 1.99257 8.86545C2.18937 9.06224 2.28777 9.06224 2.48456 8.86545C2.73056 8.61945 2.97656 8.37345 3.22255 8.12746C3.37015 7.97986 3.39475 7.83226 3.27175 7.70926C3.14875 7.58626 3.00116 7.61086 2.85356 7.75846C2.65676 7.95525 2.45996 8.15205 2.23857 8.39805Z" />
          <path d="M11.3901 17.1309C10.0617 17.1309 9.00391 16.0731 9.00391 14.7448C9.00391 13.4164 10.0617 12.3586 11.3901 12.334C12.7185 12.334 13.8008 13.3918 13.8008 14.7202C13.7762 16.0485 12.7185 17.1309 11.3901 17.1309ZM11.0703 14.9169C11.0457 14.9169 11.0457 14.9169 11.0211 14.9169C10.9473 14.8431 10.8489 14.7447 10.7751 14.6709C10.6521 14.548 10.5045 14.548 10.3815 14.6464C10.2585 14.7694 10.2831 14.8923 10.4061 15.0399C10.5291 15.1875 10.6767 15.3105 10.8243 15.4581C10.9965 15.6303 11.1195 15.6303 11.2917 15.4581C11.6361 15.1137 12.0051 14.7448 12.3495 14.4004C12.3741 14.3758 12.3987 14.3512 12.3987 14.3266C12.4971 14.2036 12.4971 14.056 12.3987 13.9576C12.3003 13.8592 12.1527 13.8592 12.0297 13.9576C11.9805 14.0068 11.9313 14.056 11.9067 14.0806C11.6115 14.3758 11.3409 14.6464 11.0703 14.9169Z" />
          <path d="M4.74801 1.50991C4.62501 0.968722 4.74801 0.501328 5.2154 0.206133C5.609 -0.0644634 6.02719 -0.0644649 6.42078 0.181531C6.91278 0.476727 7.06038 0.94412 6.93738 1.53451C7.01118 1.53451 7.06038 1.53451 7.13417 1.53451C7.62617 1.53451 8.11816 1.53451 8.61015 1.53451C8.88075 1.53451 9.02835 1.68211 9.02835 1.95271C9.02835 2.1987 9.02835 2.4447 9.02835 2.6907C9.02835 3.13349 8.78235 3.40409 8.31496 3.40409C7.33097 3.40409 6.34699 3.40409 5.363 3.40409C4.69881 3.40409 4.05922 3.40409 3.39503 3.40409C2.92764 3.40409 2.68164 3.15809 2.68164 2.6907C2.68164 2.4447 2.68164 2.2233 2.68164 1.97731C2.68164 1.65751 2.80464 1.53451 3.12443 1.53451C3.61643 1.53451 4.08382 1.53451 4.57581 1.53451C4.62501 1.50991 4.67421 1.50991 4.74801 1.50991ZM5.83039 1.50991C5.92879 1.50991 6.05179 1.50991 6.15019 1.50991C6.27319 1.53451 6.34699 1.46071 6.37159 1.36231C6.46998 1.11632 6.39619 0.821122 6.19939 0.673524C5.97799 0.501327 5.6828 0.501327 5.4614 0.673524C5.24 0.845722 5.1662 1.11632 5.2646 1.36231C5.3138 1.46071 5.363 1.53451 5.486 1.50991C5.609 1.48531 5.732 1.50991 5.83039 1.50991Z" />
        </svg>
      ),
      name: "Transactions",
      path: "/dashboard/transactions",
    },
  ];

  return (
    <div className="container">
      <div className="sidebar__container">
        <div className="sidebar__container__logo">CB</div>
        <div className="sidebar__container__entries">
          {sidebarEnteries.map((entry, index) => (
            <div className="sidebar__container__entry" key={index}>
              <div className="sidebar__container__entry__icon">
                {entry.icon}
              </div>
              <div className="sidebar__container__entry__text">
                {entry.name}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="container__main">
        <div className="header__container">
          <div className="header__container">header</div>
          <div className="header__container">Profile</div>
        </div>
        <div className="content__container">content</div>
      </div>
    </div>
  );
}
