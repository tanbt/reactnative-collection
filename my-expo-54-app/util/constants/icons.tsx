import Svg, {
  Circle,
  ClipPath,
  Defs,
  G,
  Image,
  Mask,
  Path,
  Pattern,
  Rect,
} from "react-native-svg";
import { useColorScheme } from "../../hooks/use-color-scheme";
import { Colors } from "./color";

type IconProps = {
  width?: number;
  height?: number;
  color?: string;
  backgroundCorlor?: string;
};

export function CalendarOutline({
  width = 24,
  height = 24,
  color = "grey",
}: IconProps) {
  return (
    <Svg width={width} height={height} viewBox="0 0 20 22" fill="none">
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M18.6665 8.9043H0.842499C0.428499 8.9043 0.0924988 8.5683 0.0924988 8.1543C0.0924988 7.7403 0.428499 7.4043 0.842499 7.4043H18.6665C19.0805 7.4043 19.4165 7.7403 19.4165 8.1543C19.4165 8.5683 19.0805 8.9043 18.6665 8.9043Z"
        fill={color}
      />
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M14.2012 12.8096C13.7872 12.8096 13.4472 12.4736 13.4472 12.0596C13.4472 11.6456 13.7782 11.3096 14.1922 11.3096H14.2012C14.6152 11.3096 14.9512 11.6456 14.9512 12.0596C14.9512 12.4736 14.6152 12.8096 14.2012 12.8096Z"
        fill={color}
      />
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M9.7637 12.8096C9.3497 12.8096 9.0097 12.4736 9.0097 12.0596C9.0097 11.6456 9.3407 11.3096 9.7547 11.3096H9.7637C10.1777 11.3096 10.5137 11.6456 10.5137 12.0596C10.5137 12.4736 10.1777 12.8096 9.7637 12.8096Z"
        fill={color}
      />
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M5.3169 12.8096C4.9029 12.8096 4.5619 12.4736 4.5619 12.0596C4.5619 11.6456 4.8939 11.3096 5.3079 11.3096H5.3169C5.7309 11.3096 6.0669 11.6456 6.0669 12.0596C6.0669 12.4736 5.7309 12.8096 5.3169 12.8096Z"
        fill={color}
      />
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M14.2012 16.6963C13.7872 16.6963 13.4472 16.3603 13.4472 15.9463C13.4472 15.5323 13.7782 15.1963 14.1922 15.1963H14.2012C14.6152 15.1963 14.9512 15.5323 14.9512 15.9463C14.9512 16.3603 14.6152 16.6963 14.2012 16.6963Z"
        fill={color}
      />
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M9.7637 16.6963C9.3497 16.6963 9.0097 16.3603 9.0097 15.9463C9.0097 15.5323 9.3407 15.1963 9.7547 15.1963H9.7637C10.1777 15.1963 10.5137 15.5323 10.5137 15.9463C10.5137 16.3603 10.1777 16.6963 9.7637 16.6963Z"
        fill={color}
      />
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M5.3169 16.6963C4.9029 16.6963 4.5619 16.3603 4.5619 15.9463C4.5619 15.5323 4.8939 15.1963 5.3079 15.1963H5.3169C5.7309 15.1963 6.0669 15.5323 6.0669 15.9463C6.0669 16.3603 5.7309 16.6963 5.3169 16.6963Z"
        fill={color}
      />
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M13.7935 4.791C13.3795 4.791 13.0435 4.455 13.0435 4.041V0.75C13.0435 0.336 13.3795 0 13.7935 0C14.2075 0 14.5435 0.336 14.5435 0.75V4.041C14.5435 4.455 14.2075 4.791 13.7935 4.791Z"
        fill={color}
      />
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M5.7153 4.791C5.3013 4.791 4.9653 4.455 4.9653 4.041V0.75C4.9653 0.336 5.3013 0 5.7153 0C6.1293 0 6.4653 0.336 6.4653 0.75V4.041C6.4653 4.455 6.1293 4.791 5.7153 4.791Z"
        fill={color}
      />
      <Mask
        id="mask0_5144_4331"
        maskUnits="userSpaceOnUse"
        x="0"
        y="1"
        width="20"
        height="21"
      >
        <Path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M0 1.5791H19.5V21.5H0V1.5791Z"
          fill="white"
        />
      </Mask>
      <G mask="url(#mask0_5144_4331)">
        <Path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M5.521 3.0791C2.928 3.0791 1.5 4.4621 1.5 6.9731V16.0221C1.5 18.5881 2.928 20.0001 5.521 20.0001H13.979C16.572 20.0001 18 18.6141 18 16.0981V6.9731C18.004 5.7381 17.672 4.7781 17.013 4.1181C16.335 3.4381 15.29 3.0791 13.988 3.0791H5.521ZM13.979 21.5001H5.521C2.116 21.5001 0 19.4011 0 16.0221V6.9731C0 3.6451 2.116 1.5791 5.521 1.5791H13.988C15.697 1.5791 17.11 2.0911 18.075 3.0581C19.012 3.9991 19.505 5.3521 19.5 6.9751V16.0981C19.5 19.4301 17.384 21.5001 13.979 21.5001Z"
          fill={color}
        />
      </G>
    </Svg>
  );
}

export function CalendarFill({
  width = 24,
  height = 24,
  color = "grey",
}: IconProps) {
  return (
    <Svg width={width} height={height} viewBox="0 0 18 20" fill="none">
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M13.4109 0.768617L13.4119 1.51824C16.1665 1.73413 17.9862 3.61119 17.9891 6.48975L18 14.9155C18.0039 18.054 16.0322 19.985 12.8718 19.99L5.15188 20C2.01119 20.004 0.0148166 18.027 0.0108673 14.8795L6.64975e-06 6.55272C-0.00394266 3.65517 1.75153 1.78311 4.50617 1.53024L4.50518 0.780611C4.5042 0.340832 4.83001 0.00999726 5.26444 0.00999726C5.69886 0.00899776 6.02468 0.338833 6.02567 0.778612L6.02666 1.47826L11.8914 1.47027L11.8904 0.770616C11.8894 0.330837 12.2152 0.00100177 12.6497 2.26549e-06C13.0742 -0.000997234 13.4099 0.328838 13.4109 0.768617ZM1.52148 6.86157L16.4696 6.84158V6.49175C16.4272 4.34283 15.349 3.21539 13.4138 3.04748L13.4148 3.81709C13.4148 4.24688 13.0801 4.5877 12.6556 4.5877C12.2212 4.5887 11.8943 4.24887 11.8943 3.81909L11.8934 3.0095L6.02863 3.01749L6.02962 3.82609C6.02962 4.25687 5.70479 4.5967 5.27036 4.5967C4.83594 4.5977 4.50913 4.25887 4.50913 3.82809L4.50815 3.05847C2.58286 3.25137 1.51753 4.38281 1.52049 6.55072L1.52148 6.86157ZM12.2399 11.4043V11.4153C12.2498 11.8751 12.625 12.2239 13.0801 12.2139C13.5244 12.2029 13.8789 11.8221 13.869 11.3623C13.8483 10.9225 13.4918 10.5637 13.0485 10.5647C12.5944 10.5747 12.2389 10.9445 12.2399 11.4043ZM13.0554 15.892C12.6013 15.882 12.235 15.5032 12.234 15.0435C12.2241 14.5837 12.5884 14.2029 13.0426 14.1919H13.0525C13.5165 14.1919 13.8927 14.5707 13.8927 15.0405C13.8937 15.5102 13.5185 15.891 13.0554 15.892ZM8.17212 11.4203C8.19187 11.8801 8.56804 12.2389 9.02221 12.2189C9.46651 12.1979 9.82096 11.8181 9.80121 11.3583C9.79035 10.9085 9.42504 10.5587 8.98074 10.5597C8.52657 10.5797 8.17113 10.9605 8.17212 11.4203ZM9.02616 15.8471C8.57199 15.8671 8.1968 15.5082 8.17607 15.0485C8.17607 14.5887 8.53052 14.2089 8.98469 14.1879C9.42899 14.1869 9.79529 14.5367 9.80516 14.9855C9.82589 15.4463 9.47046 15.8261 9.02616 15.8471ZM4.10433 11.4553C4.12408 11.915 4.50025 12.2749 4.95442 12.2539C5.39872 12.2339 5.75317 11.8531 5.73243 11.3933C5.72256 10.9435 5.35725 10.5937 4.91196 10.5947C4.45779 10.6147 4.10334 10.9955 4.10433 11.4553ZM4.95837 15.8521C4.5042 15.8731 4.12901 15.5132 4.10828 15.0535C4.10729 14.5937 4.46273 14.2129 4.9169 14.1929C5.3612 14.1919 5.7275 14.5417 5.73737 14.9915C5.7581 15.4513 5.40365 15.8321 4.95837 15.8521Z"
        fill={color}
      />
    </Svg>
  );
}

export function Email({
  width = 24,
  height = 24,
  color = "#000000",
}: IconProps) {
  return (
    <Svg width={width} height={height} viewBox="0 0 24 24" fill="none">
      <Path
        d="M22 12.98V15.5C22 19 20 20.5 17 20.5H7C4 20.5 2 19 2 15.5V8.5C2 5 4 3.5 7 3.5H17C20 3.5 22 5 22 8.5"
        stroke={color}
        stroke-opacity="0.1"
        stroke-width="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M17 9L13.87 11.5C12.84 12.32 11.15 12.32 10.12 11.5L7 9"
        stroke={color}
        stroke-opacity="0.1"
        stroke-width="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
}

export function Clock({
  width = 24,
  height = 24,
  color = "#000000",
}: IconProps) {
  return (
    <Svg width={width} height={height} viewBox="0 0 24 24" fill="none">
      <Path
        d="M6 10V8C6 4.69 7 2 12 2C17 2 18 4.69 18 8V10"
        stroke={color}
        stroke-opacity="0.1"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M9.5 16C9.5 17.38 10.62 18.5 12 18.5C13.38 18.5 14.5 17.38 14.5 16C14.5 14.62 13.38 13.5 12 13.5"
        stroke={color}
        stroke-opacity="0.1"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M22 17V15C22 11 21 10 17 10H7C3 10 2 11 2 15V17C2 21 3 22 7 22H17C18.76 22 19.94 21.81 20.71 21.25"
        stroke={color}
        stroke-opacity="0.1"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
}

export function GoogleIcon({ width = 24, height = 24 }: IconProps) {
  return (
    <Svg width={width} height={height} viewBox="0 0 25 24" fill="none">
      <Path
        d="M24.25 12C24.25 5.37258 18.8774 0 12.25 0C5.62258 0 0.25 5.37258 0.25 12C0.25 18.6274 5.62258 24 12.25 24C18.8774 24 24.25 18.6274 24.25 12Z"
        fill="white"
      />
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M21.2497 12.2088C21.2497 11.5571 21.1912 10.9304 21.0825 10.3287H12.4258V13.8842H17.3725C17.1594 15.0331 16.5118 16.0066 15.5384 16.6584V18.9646H18.5089C20.2469 17.3644 21.2497 15.0081 21.2497 12.2088Z"
        fill="#4285F4"
      />
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M12.4258 21.1915C14.9075 21.1915 16.9881 20.3685 18.5089 18.9647L15.5384 16.6584C14.7153 17.2099 13.6625 17.5358 12.4258 17.5358C10.0318 17.5358 8.00551 15.9189 7.28272 13.7464H4.21191V16.1278C5.72434 19.1318 8.83275 21.1915 12.4258 21.1915Z"
        fill="#34A853"
      />
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M7.28283 13.7464C7.099 13.1949 6.99455 12.6058 6.99455 12C6.99455 11.3942 7.099 10.8051 7.28283 10.2536V7.87213H4.21202C3.5895 9.11299 3.23438 10.5168 3.23438 12C3.23438 13.4831 3.5895 14.8869 4.21202 16.1278L7.28283 13.7464Z"
        fill="#FBBC05"
      />
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M12.4258 6.46419C13.7753 6.46419 14.9869 6.92795 15.9395 7.83875L18.5758 5.20245C16.984 3.71927 14.9033 2.80847 12.4258 2.80847C8.83275 2.80847 5.72434 4.86821 4.21191 7.87217L7.28272 10.2536C8.00551 8.08107 10.0318 6.46419 12.4258 6.46419Z"
        fill="#EA4335"
      />
    </Svg>
  );
}

export function FacebookIcon({ width = 24, height = 24 }: IconProps) {
  return (
    <Svg width={width} height={height} viewBox="0 0 25 24" fill="none">
      <Path
        d="M0.25 12C0.25 18.6274 5.62258 24 12.25 24C18.8774 24 24.25 18.6274 24.25 12C24.25 5.37258 18.8774 0 12.25 0C5.62258 0 0.25 5.37258 0.25 12Z"
        fill="#1877F2"
      />
      <Path
        d="M18.25 12C18.25 8.7 15.55 6 12.25 6C8.95 6 6.25 8.7 6.25 12C6.25 15 8.425 17.475 11.275 17.925V13.725H9.775V12H11.275V10.65C11.275 9.15 12.175 8.325 13.525 8.325C14.2 8.325 14.875 8.475 14.875 8.475V9.975H14.125C13.375 9.975 13.15 10.425 13.15 10.875V12H14.8L14.5 13.725H13.075V18C16.075 17.55 18.25 15 18.25 12Z"
        fill="white"
      />
    </Svg>
  );
}

export function ArrowRightIcon() {
  return (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <Path
        d="M8.5 12H14.5"
        stroke="#fff"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M12.5 15L15.5 12L12.5 9"
        stroke="#fff"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M4 6C2.75 7.67 2 9.75 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2C10.57 2 9.2 2.3 7.97 2.85"
        stroke="#fff"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
}

export function SmsIconWithBackground({
  width = 24,
  height = 24,
  backgroundCorlor = Colors.GRAY[10],
  color = Colors.DARK[20],
}: IconProps) {
  return (
    <Svg width={width} height={height} viewBox="0 0 43 43" fill="none">
      <Circle cx="21.5" cy="21.5" r="21.5" fill={backgroundCorlor} />
      <G transform="translate(10 10) scale(1.2)">
        <Path
          d="M1.66669 6.66669C1.66669 3.33335 3.33335 1.66669 6.66669 1.66669H13.3334C16.6667 1.66669 18.3334 3.33335 18.3334 6.66669V10.8334C18.3334 14.1667 16.6667 15.8334 13.3334 15.8334H12.9167C12.6584 15.8334 12.4084 15.9584 12.25 16.1667L11 17.8334C10.45 18.5667 9.55002 18.5667 9.00002 17.8334L7.75002 16.1667C7.61669 15.9834 7.30835 15.8334 7.08335 15.8334H6.66669C3.33335 15.8334 1.66669 15 1.66669 10.8334V10"
          stroke={color}
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M13.3304 9.16667H13.3378"
          stroke={color}
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M9.99626 9.16667H10.0037"
          stroke={color}
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M6.66209 9.16667H6.66957"
          stroke={color}
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </G>
    </Svg>
  );
}

export function ArrowOutlineLeftIcon({
  width = 24,
  height = 24,
  color,
}: IconProps) {
  const colorScheme = useColorScheme();
  const iconColor =
    color || (colorScheme === "dark" ? Colors.WHITE[500] : Colors.DARK[500]);
  return (
    <Svg width={width} height={height} viewBox="0 0 24 24" fill="none">
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M20.2928 12.8229C20.6922 12.7679 21 12.4205 21 12.0001C21 11.5415 20.6337 11.1698 20.1818 11.1698L5.80007 11.1698L10.9953 5.91866L11.0747 5.8257C11.313 5.50114 11.2876 5.0398 10.9977 4.74441C10.6788 4.41948 10.1608 4.41839 9.84062 4.74198L3.25226 11.4004C3.21304 11.4386 3.17756 11.4806 3.14642 11.526C2.92336 11.8502 2.95478 12.3001 3.24067 12.5889L9.84067 19.2581L9.9326 19.3383C10.2534 19.5787 10.7079 19.551 10.9977 19.2555C11.3166 18.9306 11.3155 18.4049 10.9953 18.0813L5.79877 12.8304L20.1818 12.8304L20.2928 12.8229Z"
        // fill="#130F26"
        fill={iconColor}
      />
    </Svg>
  );
}

export function EmailIconWithBackground({
  width = 24,
  height = 24,
  backgroundCorlor = Colors.GRAY[10],
  color = Colors.DARK[20],
}: IconProps) {
  return (
    <Svg width={width} height={height} viewBox="0 0 43 43" fill="none">
      <Circle cx="21.5" cy="21.5" r="21.5" fill={backgroundCorlor} />
      <G transform="translate(10 10) scale(1.2)">
        <Path
          d="M18.3334 10.8167V12.9167C18.3334 15.8334 16.6667 17.0834 14.1667 17.0834H5.83335C3.33335 17.0834 1.66669 15.8334 1.66669 12.9167V7.08335C1.66669 4.16669 3.33335 2.91669 5.83335 2.91669H14.1667C16.6667 2.91669 18.3334 4.16669 18.3334 7.08335"
          stroke={color}
          stroke-width="1.5"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M14.1666 7.5L11.5583 9.58333C10.7 10.2667 9.29164 10.2667 8.43331 9.58333L5.83331 7.5"
          stroke={color}
          stroke-width="1.5"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M13.3304 9.16667H13.3378"
          stroke={color}
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M9.99626 9.16667H10.0037"
          stroke={color}
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M6.66209 9.16667H6.66957"
          stroke={color}
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </G>
    </Svg>
  );
}

export function RegisterBussinessIcon({
  width = 93,
  height = 93,
  color,
}: IconProps) {
  const colorScheme = useColorScheme();
  const iconColor =
    color || (colorScheme === "dark" ? Colors.WHITE[500] : Colors.DARK[500]);

  return (
    <Svg width={width} height={height} viewBox="0 0 93 93" fill="none">
      <Circle opacity="0.1" cx="46.5" cy="46.5" r="46.5" fill="#383F99" />
      <Circle cx="46.5" cy="46" r="33.5" fill="#383F99" />
      <Path
        d="M58.3125 40.5562C61.2875 41.0521 61.9875 43.2104 59.8437 45.3396L56.2271 48.9562C55.6146 49.5687 55.2792 50.75 55.4687 51.5958L56.5042 56.0729C57.3208 59.6166 55.4396 60.9875 52.3042 59.1354L47.9437 56.5541C47.1562 56.0875 45.8583 56.0875 45.0562 56.5541L40.6958 59.1354C37.575 60.9875 35.6792 59.6021 36.4958 56.0729L37.5312 51.5958C37.7208 50.75 37.3854 49.5687 36.7729 48.9562L33.1562 45.3396C31.0271 43.2104 31.7125 41.0521 34.6875 40.5562L39.3396 39.7833C40.1125 39.6521 41.0458 38.9666 41.3958 38.2521L43.9625 33.1187C45.3479 30.3333 47.6229 30.3333 49.0229 33.1187L51.5896 38.2521C51.7354 38.5583 51.9979 38.8646 52.3042 39.1125"
        stroke={iconColor}
        stroke-width="3"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
}

export function ChevronRightIcon({
  width = 24,
  height = 24,
  color,
}: IconProps) {
  const colorScheme = useColorScheme();
  const iconColor =
    color || (colorScheme === "dark" ? Colors.WHITE[500] : Colors.DARK[500]);
  return (
    <Svg width={width} height={height} viewBox="0 0 24 24" fill="none">
      <Path
        d="M7.7459 19.7589C7.44784 19.4667 7.42074 19.0095 7.66461 18.6873L7.7459 18.595L14.4734 12L7.7459 5.40503C7.44784 5.11283 7.42074 4.65558 7.66461 4.33338L7.7459 4.24106C8.04396 3.94887 8.51037 3.9223 8.83904 4.16137L8.93321 4.24106L16.2541 11.418C16.5522 11.7102 16.5793 12.1675 16.3354 12.4897L16.2541 12.582L8.93321 19.7589C8.60534 20.0804 8.07376 20.0804 7.7459 19.7589Z"
        // fill="#130F26"
        fill={iconColor}
      />
    </Svg>
  );
}

export function LocationIcon({ width = 24, height = 24, color }: IconProps) {
  const colorScheme = useColorScheme();
  const iconColor =
    color || (colorScheme === "dark" ? Colors.WHITE[500] : Colors.DARK[500]);
  return (
    <Svg width={width} height={height} viewBox="0 0 24 24" fill="none">
      <Path
        d="M15.1199 10.31C15.1199 12.03 13.7299 13.43 11.9999 13.43C10.2699 13.43 8.87988 12.04 8.87988 10.31C8.87988 8.58 10.2799 7.19 11.9999 7.19C12.3399 7.19 12.6699 7.24 12.9699 7.34"
        // stroke="#292D32"
        stroke={iconColor}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M5.97996 4.3C10.35 0.19 18.82 1.6 20.38 8.51C21.53 13.59 18.37 17.89 15.6 20.55C13.59 22.49 10.41 22.49 8.38996 20.55C5.62996 17.88 2.45996 13.58 3.61996 8.5"
        // stroke="#292D32"
        stroke={iconColor}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
}

export function BellIcon({ width = 24, height = 24, color }: IconProps) {
  const colorScheme = useColorScheme();
  const iconColor =
    color || (colorScheme === "dark" ? Colors.WHITE[500] : Colors.DARK[500]);

  return (
    <Svg width={width} height={height} viewBox="0 0 24 24" fill="none">
      <Path
        d="M18.02 11.8V8.91C18.02 5.61 15.32 2.91 12.02 2.91C8.71003 2.91 6.02003 5.6 6.02003 8.91V11.8C6.02003 12.41 5.76003 13.34 5.45003 13.86L4.30003 15.77C3.59003 16.95 4.08003 18.26 5.38003 18.7C9.69003 20.14 14.34 20.14 18.65 18.7C19.86 18.3 20.39 16.87 19.73 15.77"
        stroke={iconColor}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
      />
      <Path
        d="M13.87 3.2C13.56 3.11 13.24 3.04 12.91 3C11.95 2.88 11.03 2.95 10.17 3.2C10.46 2.46 11.18 1.94 12.02 1.94C12.86 1.94 13.58 2.46 13.87 3.2Z"
        stroke={iconColor}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M15.02 19.06C15.02 20.71 13.67 22.06 12.02 22.06C11.2 22.06 10.44 21.72 9.90002 21.18C9.36002 20.64 9.02002 19.88 9.02002 19.06"
        stroke={iconColor}
        strokeWidth="1.5"
        strokeMiterlimit="10"
      />
    </Svg>
  );
}

export function ShoppingCartIcon({
  width = 24,
  height = 24,
  color,
}: IconProps) {
  const colorScheme = useColorScheme();
  const iconColor =
    color || (colorScheme === "dark" ? Colors.WHITE[500] : Colors.DARK[500]);

  return (
    <Svg width={width} height={height} viewBox="0 0 24 24" fill="none">
      <Path
        d="M4.75003 13.97C4.61003 15.6 5.90003 17 7.54003 17H18.19C19.63 17 20.89 15.82 21 14.39L21.54 6.89001C21.66 5.23001 20.4 3.88 18.73 3.88H5.82004"
        stroke={iconColor}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M2 2H3.74001C4.82001 2 5.67 2.93 5.58 4L5.08 10.05"
        stroke={iconColor}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M16.25 22C16.9404 22 17.5 21.4404 17.5 20.75C17.5 20.0596 16.9404 19.5 16.25 19.5C15.5596 19.5 15 20.0596 15 20.75C15 21.4404 15.5596 22 16.25 22Z"
        stroke={iconColor}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M8.25 22C8.94036 22 9.5 21.4404 9.5 20.75C9.5 20.0596 8.94036 19.5 8.25 19.5C7.55964 19.5 7 20.0596 7 20.75C7 21.4404 7.55964 22 8.25 22Z"
        stroke={iconColor}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M9 8H21"
        stroke={iconColor}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export function ChatIcon({ width = 24, height = 24, color }: IconProps) {
  const colorScheme = useColorScheme();
  const iconColor =
    color || (colorScheme === "dark" ? Colors.WHITE[500] : Colors.DARK[500]);

  return (
    <Svg width={width} height={height} viewBox="0 0 24 24" fill="none">
      <Path
        d="M13.17 2C8.28997 2 4.33997 5.68999 4.33997 10.24C4.33997 10.5 4.34997 10.75 4.37997 11C5.26997 10.42 6.33997 10.09 7.49997 10.09C10.54 10.09 13 12.39 13 15.23C13 16.42 12.56 17.52 11.82 18.39C12.26 18.45 12.71 18.48 13.17 18.48L17.36 20.97C18.07 21.4 18.96 20.82 18.86 19.99L18.47 16.83C20.61 15.33 22 12.94 22 10.24C22 7.16999 20.2 4.49001 17.52 3.07001"
        stroke={iconColor}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M4.38 11C5.27 10.42 6.34 10.09 7.5 10.09C10.54 10.09 13 12.39 13 15.23C13 16.42 12.56 17.52 11.82 18.39C10.83 19.59 9.26 20.36 7.5 20.36L4.89 21.91C4.45 22.18 3.89 21.81 3.95 21.3L4.2 19.33C2.86 18.4 2 16.91 2 15.23C2 14.93 2.03 14.64 2.08 14.36"
        stroke={iconColor}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export function ChatMessageIcon({ width = 24, height = 24, color }: IconProps) {
  const colorScheme = useColorScheme();
  const iconColor =
    color || (colorScheme === "dark" ? Colors.WHITE[500] : Colors.DARK[500]);
  return (
    <Svg width={width} height={height} viewBox="0 0 24 24" fill="none">
      <Path
        d="M2 8C2 4 4 2 8 2H16C20 2 22 4 22 8V13C22 17 20 19 16 19H15.5C15.19 19 14.89 19.15 14.7 19.4L13.2 21.4C12.54 22.28 11.46 22.28 10.8 21.4L9.3 19.4C9.14 19.18 8.77 19 8.5 19H8C4 19 2 18 2 13V12"
        // stroke="#292D32"
        stroke={iconColor}
        stroke-width="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M15.9965 11H16.0054"
        // stroke="#292D32"
        stroke={iconColor}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M11.9955 11H12.0045"
        // stroke="#292D32"
        stroke={iconColor}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M7.99451 11H8.00349"
        // stroke="#292D32"
        stroke={iconColor}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
}

export function LogoutIcon({ width = 24, height = 24, color }: IconProps) {
  return (
    <Svg width={width} height={height} viewBox="0 0 24 24" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.319 22H6.433C3.989 22 2 20.011 2 17.565V6.436C2 3.99 3.989 2 6.433 2H11.308C13.754 2 15.744 3.99 15.744 6.436V7.368C15.744 7.782 15.408 8.118 14.994 8.118C14.58 8.118 14.244 7.782 14.244 7.368V6.436C14.244 4.816 12.927 3.5 11.308 3.5H6.433C4.816 3.5 3.5 4.816 3.5 6.436V17.565C3.5 19.184 4.816 20.5 6.433 20.5H11.319C12.931 20.5 14.244 19.188 14.244 17.576V16.633C14.244 16.219 14.58 15.883 14.994 15.883C15.408 15.883 15.744 16.219 15.744 16.633V17.576C15.744 20.016 13.758 22 11.319 22Z"
        fill={color || "#181214"}
      />
      <Mask
        id="mask0_52463_11166"
        maskUnits="userSpaceOnUse"
        x="8"
        y="11"
        width="15"
        height="2"
      >
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M8.99609 11.25H22.537V12.75H8.99609V11.25Z"
          fill="white"
        />
      </Mask>
      <G mask="url(#mask0_52463_11166)">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M21.7871 12.75H9.74609C9.33209 12.75 8.99609 12.414 8.99609 12C8.99609 11.586 9.33209 11.25 9.74609 11.25H21.7871C22.2011 11.25 22.5371 11.586 22.5371 12C22.5371 12.414 22.2011 12.75 21.7871 12.75Z"
          fill={color || "#181214"}
        />
      </G>
      <Mask
        id="mask1_52463_11166"
        maskUnits="userSpaceOnUse"
        x="18"
        y="8"
        width="5"
        height="8"
      >
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M18.1094 8.33525H22.5367V15.666H18.1094V8.33525Z"
          fill="white"
        />
      </Mask>
      <G mask="url(#mask1_52463_11166)">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M18.8591 15.666C18.6671 15.666 18.4741 15.593 18.3281 15.445C18.0361 15.151 18.0371 14.677 18.3301 14.385L20.7241 12L18.3301 9.616C18.0371 9.324 18.0351 8.85 18.3281 8.556C18.6201 8.262 19.0941 8.262 19.3881 8.554L22.3161 11.469C22.4581 11.609 22.5371 11.801 22.5371 12C22.5371 12.199 22.4581 12.391 22.3161 12.531L19.3881 15.447C19.2421 15.593 19.0501 15.666 18.8591 15.666Z"
          fill={color || "#181214"}
        />
      </G>
    </Svg>
  );
}

export function ScanBarCode({ width = 24, height = 24, color }: IconProps) {
  return (
    <Svg width={width} height={height} viewBox="0 0 24 24" fill="none">
      <Path
        d="M2 9V6.5C2 4.01 4.01 2 6.5 2H9"
        stroke={color || "#181214"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M15 2H17.5C19.99 2 22 4.01 22 6.5V9"
        stroke={color || "#181214"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M22 16V17.5C22 19.99 19.99 22 17.5 22H16"
        stroke={color || "#181214"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M9 22H6.5C4.01 22 2 19.99 2 17.5V15"
        stroke={color || "#181214"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M10.5 7V9C10.5 10 10 10.5 9 10.5H7C6 10.5 5.5 10 5.5 9V7C5.5 6 6 5.5 7 5.5H9C10 5.5 10.5 6 10.5 7Z"
        stroke={color || "#181214"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M13.5 9V7C13.5 6 14 5.5 15 5.5H17C18 5.5 18.5 6 18.5 7V9C18.5 10 18 10.5 17 10.5"
        stroke={color || "#181214"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M7 13.5H9C10 13.5 10.5 14 10.5 15V17C10.5 18 10 18.5 9 18.5H7C6 18.5 5.5 18 5.5 17"
        stroke={color || "#181214"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M18.5 15V17C18.5 18 18 18.5 17 18.5H15C14 18.5 13.5 18 13.5 17V15C13.5 14 14 13.5 15 13.5H17C18 13.5 18.5 14 18.5 15Z"
        stroke={color || "#181214"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export function HomeIcon({ width = 24, height = 24, color }: IconProps) {
  const colorScheme = useColorScheme();
  const iconColor =
    color || (colorScheme === "dark" ? Colors.WHITE[500] : Colors.DARK[500]);
  return (
    <Svg width={width} height={height} viewBox="0 0 24 24" fill="none">
      <Path
        d="M22 10.4999C22 9.28992 21.19 7.73992 20.2 7.04992L14.02 2.71992C12.62 1.73992 10.37 1.78992 9.02 2.83992L3.63 7.03992C2.73 7.73992 2 9.22992 2 10.3599V17.7699C2 20.0899 3.89 21.9899 6.21 21.9899H17.79C20.11 21.9899 22 20.0899 22 17.7799V14.6799"
        // stroke="#181214"
        stroke={iconColor}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M12 17.99V14.99"
        // stroke="#181214"
        stroke={iconColor}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
}

export function Setting2({ width = 24, height = 24, color }: IconProps) {
  return (
    <Svg width={width} height={height} viewBox="0 0 24 24" fill="none">
      <Path
        d="M15 12C15 10.34 13.66 9 12 9C10.34 9 9 10.34 9 12C9 13.66 10.34 15 12 15C12.41 15 12.81 14.92 13.17 14.76"
        stroke={color || "#181214"}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M6.88086 20.58L7.97086 21.21C8.76086 21.68 9.78086 21.4 10.2509 20.61L10.3609 20.42C11.2609 18.85 12.7409 18.85 13.6509 20.42L13.7609 20.61C14.2309 21.4 15.2509 21.68 16.0409 21.21L17.7709 20.22C18.6809 19.7 18.9909 18.53 18.4709 17.63C17.5609 16.06 18.3009 14.78 20.1109 14.78C21.1509 14.78 22.0109 13.93 22.0109 12.88V11.12C22.0109 10.08 21.1609 9.22 20.1109 9.22C19.1009 9.22 18.4209 8.82 18.1809 8.19C17.9909 7.7 18.0709 7.06 18.4709 6.37C18.9909 5.46 18.6809 4.3 17.7709 3.78L16.9609 3.32"
        stroke={color || "#181214"}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M13.64 3.58C12.74 5.15 11.26 5.15 10.35 3.58L10.24 3.39C9.78 2.6 8.76 2.32 7.97 2.79L6.24 3.78C5.33 4.3 5.02 5.47 5.54 6.38C6.45 7.94 5.71 9.22 3.9 9.22C2.86 9.22 2 10.07 2 11.12V12.88C2 13.92 2.85 14.78 3.9 14.78C5.71 14.78 6.45 16.06 5.54 17.63"
        stroke={color || "#181214"}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export function ShareIcon({ width = 24, height = 24, color }: IconProps) {
  const colorScheme = useColorScheme();
  const iconColor =
    color || (colorScheme === "dark" ? Colors.WHITE[500] : Colors.DARK[500]);
  return (
    <Svg width={width} height={height} viewBox="0 0 24 24" fill="none">
      <Path
        d="M16.96 6.17004C18.96 7.56004 20.34 9.77004 20.62 12.32"
        // stroke="#292D32"
        stroke={iconColor}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M3.49023 12.37C3.75023 9.82997 5.11023 7.61997 7.09023 6.21997"
        // stroke="#292D32"
        stroke={iconColor}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M8.18994 20.9399C9.34994 21.5299 10.6699 21.8599 12.0599 21.8599C13.3999 21.8599 14.6599 21.5599 15.7899 21.0099"
        // stroke="#292D32"
        stroke={iconColor}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M9.27979 4.92001C9.27979 6.45001 10.5198 7.70001 12.0598 7.70001C13.5998 7.70001 14.8398 6.46001 14.8398 4.92001C14.8398 3.38001 13.5998 2.14001 12.0598 2.14001"
        // stroke="#292D32"
        stroke={iconColor}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M4.8298 19.92C6.36516 19.92 7.60981 18.6753 7.60981 17.14C7.60981 15.6046 6.36516 14.36 4.8298 14.36C3.29445 14.36 2.0498 15.6046 2.0498 17.14C2.0498 18.6753 3.29445 19.92 4.8298 19.92Z"
        // stroke="#292D32"
        stroke={iconColor}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M21.9399 17.14C21.9399 15.61 20.6999 14.36 19.1599 14.36C17.6199 14.36 16.3799 15.6 16.3799 17.14C16.3799 18.68 17.6199 19.92 19.1599 19.92"
        // stroke="#292D32"
        stroke={iconColor}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
}

export function LikeIcon({ width = 24, height = 24, color }: IconProps) {
  const colorScheme = useColorScheme();
  const iconColor =
    color || (colorScheme === "dark" ? Colors.WHITE[500] : Colors.DARK[500]);
  return (
    <Svg width={width} height={height} viewBox="0 0 25 24" fill="none">
      <Path
        d="M21.6475 11.95C22.1475 10.55 21.2475 9.34997 19.7475 9.34997H15.7475C15.1475 9.34997 14.6475 8.84997 14.7475 8.14997L15.2475 4.94997C15.4475 4.04997 14.8475 3.04997 13.9475 2.74997C13.1475 2.44997 12.1475 2.84997 11.7475 3.44997L7.64746 9.54997"
        // stroke="#ED1B64"
        stroke={iconColor}
        stroke-width="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M7.64746 18.35L10.7475 20.75C11.1475 21.15 12.0475 21.35 12.6475 21.35H16.4475C17.6475 21.35 18.9475 20.45 19.2475 19.25L20.4875 15.48"
        // stroke="#ED1B64"
        stroke={iconColor}
        stroke-width="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M2.54688 18.3499V8.5499C2.54688 7.1499 3.14688 6.6499 4.54688 6.6499H5.54688C6.94687 6.6499 7.54688 7.1499 7.54688 8.5499V18.3499C7.54688 19.7499 6.94687 20.2499 5.54688 20.2499H4.54688C3.14688 20.2499 2.54688 19.7499 2.54688 18.3499Z"
        // stroke="#ED1B64"
        stroke={iconColor}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
}

export function FollowIcon({ width = 24, height = 24, color }: IconProps) {
  const colorScheme = useColorScheme();
  const iconColor =
    color || (colorScheme === "dark" ? Colors.WHITE[500] : Colors.DARK[500]);
  return (
    <Svg width="25" height="24" viewBox="0 0 25 24" fill="none">
      <Path
        d="M22.5 8C22.5 4 20.5 2 16.5 2H8.5C4.5 2 2.5 4 2.5 8V21C2.5 21.55 2.95 22 3.5 22H16.5C20.5 22 22.5 20 22.5 16V12"
        // stroke="#ED1B64"
        stroke={iconColor}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M15 12H16"
        // stroke="#ED1B64"
        stroke={iconColor}
        stroke-width="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M9 12H12.5"
        // stroke="#ED1B64"
        stroke={iconColor}
        stroke-width="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M12.5 15.5V8.5"
        // stroke="#ED1B64"
        stroke={iconColor}
        stroke-width="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
}

export function UserInformation({ width = 24, height = 24, color }: IconProps) {
  const colorScheme = useColorScheme();
  const iconColor =
    color || (colorScheme === "dark" ? Colors.WHITE[500] : Colors.DARK[500]);

  return (
    <Svg width={width} height={height} viewBox="0 0 16 16" fill="none">
      <Path
        d="M9.96031 5.35999C10.107 5.65332 10.1936 5.98665 10.1936 6.33999C10.187 7.51999 9.26031 8.48665 8.08698 8.51999C8.04031 8.51332 7.98031 8.51332 7.92698 8.51999C6.75365 8.47999 5.82031 7.51999 5.82031 6.33999C5.82031 5.13332 6.79365 4.15332 8.00698 4.15332"
        stroke={iconColor}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M12.4925 12.92C11.3059 14.0067 9.73253 14.6667 7.99919 14.6667C6.26586 14.6667 4.69253 14.0067 3.50586 12.92C3.57253 12.2933 3.97253 11.68 4.68586 11.2C6.51253 9.98668 9.49919 9.98668 11.3125 11.2C12.0259 11.68 12.4259 12.2933 12.4925 12.92Z"
        stroke={iconColor}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M2.66732 4.00001C1.83398 5.11334 1.33398 6.50001 1.33398 8.00001C1.33398 11.68 4.32065 14.6667 8.00065 14.6667C11.6807 14.6667 14.6673 11.68 14.6673 8.00001C14.6673 4.32001 11.6807 1.33334 8.00065 1.33334C7.04732 1.33334 6.13398 1.53334 5.31398 1.90001"
        stroke={iconColor}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
}

export function PaymentMethod({ width = 24, height = 24, color }: IconProps) {
  const colorScheme = useColorScheme();
  const iconColor =
    color || (colorScheme === "dark" ? Colors.WHITE[500] : Colors.DARK[500]);

  return (
    <Svg width={width} height={height} viewBox="0 0 16 16" fill="none">
      <Path
        d="M1.33398 8.00002C1.33398 6.18669 2.42732 4.92002 4.12732 4.70669C4.30065 4.68002 4.48065 4.66669 4.66732 4.66669H11.334C11.5073 4.66669 11.674 4.67335 11.834 4.70001C13.554 4.90001 14.6673 6.17335 14.6673 8.00002V11.3334C14.6673 13.3334 13.334 14.6667 11.334 14.6667H4.66732C2.66732 14.6667 1.33398 13.3334 1.33398 11.3334V10.6734"
        stroke={iconColor}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M11.8336 4.69998C11.6736 4.67331 11.507 4.66665 11.3336 4.66665H4.66695C4.48029 4.66665 4.30029 4.67999 4.12695 4.70665C4.22029 4.51999 4.35362 4.34665 4.51362 4.18665L6.68029 2.01331C7.59362 1.10665 9.07362 1.10665 9.98695 2.01331L11.1536 3.19333C11.5803 3.61333 11.807 4.14665 11.8336 4.69998Z"
        stroke={iconColor}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M14.6673 8.33331H12.6673C11.934 8.33331 11.334 8.93331 11.334 9.66665C11.334 10.4 11.934 11 12.6673 11H14.6673"
        stroke={iconColor}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
}

export function HelpCenter({ width = 24, height = 24, color }: IconProps) {
  const colorScheme = useColorScheme();
  const iconColor =
    color || (colorScheme === "dark" ? Colors.WHITE[500] : Colors.DARK[500]);

  return (
    <Svg width={width} height={height} viewBox="0 0 16 16" fill="none">
      <Path
        d="M8 5.41998V8.63998"
        stroke={iconColor}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M2.82594 4.1333C2.82594 3.42664 3.40594 2.84664 4.1126 2.84664H5.26594C5.5326 2.84664 5.90594 2.70664 6.10594 2.53997L7.15927 1.63997C7.62594 1.24664 8.37927 1.24664 8.8326 1.63997L9.88594 2.53997C10.0859 2.70664 10.4659 2.84664 10.7326 2.84664H11.8659C12.5726 2.84664 13.1526 3.42664 13.1526 4.1333V5.26664C13.1526 5.5333 13.2926 5.90664 13.4593 6.10664L14.3593 7.15997C14.7526 7.62664 14.7526 8.37997 14.3593 8.8333L13.4593 9.88664C13.2926 10.0866 13.1526 10.46 13.1526 10.7266V11.86C13.1526 12.5666 12.5726 13.1466 11.8659 13.1466H10.7326C10.4659 13.1466 10.0926 13.2866 9.8926 13.4533L8.83927 14.3533C8.3726 14.7466 7.61927 14.7466 7.16594 14.3533L6.1126 13.4533C5.9126 13.2866 5.5326 13.1466 5.2726 13.1466H4.1126C3.40594 13.1466 2.82594 12.5666 2.82594 11.86V10.72C2.82594 10.46 2.6926 10.08 2.52594 9.88664L1.62594 8.82664C1.23927 8.36664 1.23927 7.61997 1.62594 7.15997L1.99927 6.71997"
        stroke={iconColor}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M7.99609 10.6667H8.00208"
        stroke={iconColor}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
}

export function AboutUs({ width = 24, height = 24, color }: IconProps) {
  const colorScheme = useColorScheme();
  const iconColor =
    color || (colorScheme === "dark" ? Colors.WHITE[500] : Colors.DARK[500]);

  return (
    <Svg width={width} height={height} viewBox="0 0 16 16" fill="none">
      <Path
        d="M8 5.33331V8.66665"
        stroke={iconColor}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M2.66732 3.99998C1.83398 5.11331 1.33398 6.49998 1.33398 7.99998C1.33398 11.68 4.32065 14.6666 8.00065 14.6666C11.6807 14.6666 14.6673 11.68 14.6673 7.99998C14.6673 4.31998 11.6807 1.33331 8.00065 1.33331C7.04732 1.33331 6.13398 1.53331 5.31398 1.89998"
        stroke={iconColor}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M7.99609 10.6667H8.00208"
        stroke={iconColor}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
}

export function NotificationIcon({
  width = 24,
  height = 24,
  color,
}: IconProps) {
  const colorScheme = useColorScheme();
  const iconColor =
    color || (colorScheme === "dark" ? Colors.WHITE[500] : Colors.DARK[500]);

  return (
    <Svg width={width} height={height} viewBox="0 0 24 24" fill="none">
      <Path
        d="M12 22c1.1 0 2-.9 2-2h-4a2 2 0 002 2zm6-6V11c0-3.07-1.63-5.64-4.5-6.32V4a1.5 1.5 0 10-3 0v.68C7.63 5.36 6 7.92 6 11v5l-1.7 1.7A1 1 0 005 20h14a1 1 0 00.7-1.7L18 16z"
        stroke={iconColor}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export function LanguageIcon({
  width = 24,
  height = 24,
  color,
}: {
  width?: number;
  height?: number;
  color?: string;
}) {
  const colorScheme = useColorScheme();
  const iconColor =
    color || (colorScheme === "dark" ? Colors.WHITE[500] : Colors.DARK[500]);

  return (
    <Svg width={width} height={height} viewBox="0 0 24 24" fill="none">
      <Path
        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10
          10-4.48 10-10S17.52 2 12 2zm0 0
          c2.5 2 4 6 4 10s-1.5 8-4 10m0-20
          c-2.5 2-4 6-4 10s1.5 8 4 10m-8-10h16"
        stroke={iconColor}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export function PasswordIcon({ width = 24, height = 24, color }: IconProps) {
  const colorScheme = useColorScheme();
  const iconColor =
    color || (colorScheme === "dark" ? Colors.WHITE[500] : Colors.DARK[500]);

  return (
    <Svg width={width} height={height} viewBox="0 0 24 24" fill="none">
      <Path
        d="M12 17a2 2 0 100-4 2 2 0 000 4zm6-6V9a6 6 0 10-12 0v2a2 2 0 00-2 2v6a2 2 0 002 2h12a2 2 0 002-2v-6a2 2 0 00-2-2zm-8-2a4 4 0 118 0v2H8V9z"
        stroke={iconColor}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export function DeleteIcon({ width = 24, height = 24, color }: IconProps) {
  const colorScheme = useColorScheme();
  const iconColor =
    color || (colorScheme === "dark" ? Colors.WHITE[500] : Colors.DARK[500]);

  return (
    <Svg width={width} height={height} viewBox="0 0 24 24" fill="none">
      <Path
        d="M3 6h18M8 6V4a2 2 0 012-2h4a2 2 0 012 2v2m2 0v14a2 2 0 01-2 2H6a2 2 0 01-2-2V6h16z"
        stroke={iconColor}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M10 11v6M14 11v6"
        stroke={iconColor}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export function SearchIcon({ width = 24, height = 24, color }: IconProps) {
  const colorScheme = useColorScheme();
  const iconColor =
    color || (colorScheme === "dark" ? Colors.WHITE[500] : Colors.DARK[500]);

  return (
    <Svg width={width} height={height} viewBox="0 0 24 24" fill="none">
      <Path
        d="M11.5 2C16.75 2 21 6.25 21 11.5C21 16.75 16.75 21 11.5 21C6.25 21 2 16.75 2 11.5C2 7.8 4.11 4.6 7.2 3.03"
        stroke={iconColor}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M22 22L20 20"
        stroke={iconColor}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
}

export function UpArrow({ width = 24, height = 24, color }: IconProps) {
  const colorScheme = useColorScheme();
  const iconColor =
    color || (colorScheme === "dark" ? Colors.WHITE[500] : Colors.DARK[500]);
  return (
    <Svg width={width} height={height} viewBox="0 0 15 9" fill="none">
      <Path
        d="M13.5511 7.00699L7.29422 1.11641L1.25953 7.22387"
        stroke={iconColor}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
}

export function DownArrow({ width = 24, height = 24, color }: IconProps) {
  const colorScheme = useColorScheme();
  const iconColor =
    color || (colorScheme === "dark" ? Colors.WHITE[500] : Colors.DARK[500]);
  return (
    <Svg width={width} height={height} viewBox="0 0 15 10" fill="none">
      <Path
        d="M1.29084 2.25487L7.5775 8.11516L13.5812 1.97864"
        stroke={iconColor}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
}

export function CustomerServiceIcon({
  width = 24,
  height = 24,
  color,
}: IconProps) {
  const colorScheme = useColorScheme();
  const iconColor =
    color || (colorScheme === "dark" ? Colors.WHITE[500] : Colors.DARK[500]);
  return (
    <Svg width={width} height={height} viewBox="0 0 24 24" fill="none">
      <Path
        d="M6.375 9.84375C5.21184 9.84375 4.26562 10.79 4.26562 11.9531V17.6719C4.26562 18.835 5.21184 19.7812 6.375 19.7812C7.53816 19.7812 8.48438 18.835 8.48438 17.6719V11.9531C8.48438 10.79 7.53816 9.84375 6.375 9.84375Z"
        fill={iconColor}
      />
      <Path
        d="M2.85938 11.9531C2.85938 11.7503 2.88614 11.5544 2.91928 11.3609C2.07188 11.6348 1.45312 12.4219 1.45312 13.3594V16.2656C1.45312 17.2031 2.07188 17.9902 2.91928 18.2641C2.88614 18.0706 2.85938 17.8747 2.85938 17.6719V11.9531Z"
        fill={iconColor}
      />
      <Path
        d="M17.625 9.84375C16.4618 9.84375 15.5156 10.79 15.5156 11.9531V17.6719C15.5156 18.835 16.4618 19.7812 17.625 19.7812C17.8364 19.7812 18.0367 19.7406 18.2293 19.6824C17.9676 20.55 17.1705 21.1875 16.2188 21.1875H13.9799C13.6886 20.3708 12.9155 19.7812 12 19.7812C10.8368 19.7812 9.89062 20.7275 9.89062 21.8906C9.89062 23.0538 10.8368 24 12 24C12.9155 24 13.6886 23.4104 13.9799 22.5938H16.2188C18.1572 22.5938 19.7344 21.0165 19.7344 19.0781V17.6719V11.9531C19.7344 10.79 18.7882 9.84375 17.625 9.84375Z"
        fill={iconColor}
      />
      <Path
        d="M21.0801 11.3609C21.1132 11.5544 21.14 11.7503 21.14 11.9531V17.6719C21.14 17.8747 21.1132 18.0706 21.0801 18.2641C21.9275 17.9902 22.5462 17.2031 22.5462 16.2656V13.3594C22.5462 12.4219 21.9275 11.6348 21.0801 11.3609Z"
        fill={iconColor}
      />
      <Path
        d="M12 0C6.18412 0 1.45312 4.731 1.45312 10.5469V10.5648C1.87205 10.2477 2.35673 10.0156 2.89158 9.91167C3.22022 5.16802 7.17441 1.40625 12 1.40625C16.8256 1.40625 20.7798 5.16802 21.1084 9.91162C21.6432 10.0155 22.1279 10.2477 22.5469 10.5648V10.5469C22.5469 4.731 17.8159 0 12 0Z"
        fill={iconColor}
      />
    </Svg>
  );
}

export function WhatsAppIcon({ width = 24, height = 24, color }: IconProps) {
  const colorScheme = useColorScheme();
  const iconColor =
    color || (colorScheme === "dark" ? Colors.WHITE[500] : Colors.DARK[500]);
  return (
    <Svg width={width} height={height} viewBox="0 0 24 24" fill="none">
      <Path
        d="M20.4338 3.48523C18.1793 1.23907 15.18 0.00128174 11.9879 0C8.80298 0 5.79895 1.23669 3.52954 3.4823C1.2561 5.73175 0.00292969 8.72113 0 11.8889V11.8925V11.8947C0.000366211 13.812 0.504089 15.7462 1.46027 17.5117L0.0327759 24L6.59583 22.5071C8.25806 23.3448 10.1127 23.7865 11.9833 23.7872H11.9881C15.1725 23.7872 18.1765 22.5504 20.4463 20.3046C22.7217 18.0533 23.9755 15.0677 23.9769 11.898C23.9778 8.75061 22.7197 5.76288 20.4338 3.48523ZM11.9879 21.9141H11.9837C10.3041 21.9133 8.63983 21.4916 7.17114 20.6942L6.86078 20.5258L2.49664 21.5184L3.44458 17.2103L3.26184 16.8951C2.35327 15.3283 1.87317 13.5987 1.87317 11.8927C1.87665 6.37079 6.41364 1.87317 11.9875 1.87317C14.6803 1.87427 17.2104 2.91815 19.1118 4.81219C21.0419 6.73553 22.1045 9.25177 22.1036 11.8975C22.1014 17.4207 17.5635 21.9141 11.9879 21.9141Z"
        fill={iconColor}
      />
      <Path
        d="M8.72626 6.64984H8.20074C8.01782 6.64984 7.72083 6.71832 7.4696 6.9917C7.2182 7.26526 6.50977 7.92645 6.50977 9.27118C6.50977 10.6159 7.49249 11.9152 7.62946 12.0978C7.7666 12.2802 9.52643 15.1278 12.3137 16.2233C14.6301 17.1337 15.1016 16.9526 15.6042 16.907C16.1071 16.8616 17.2267 16.246 17.4553 15.6079C17.6838 14.9698 17.6838 14.4227 17.6153 14.3084C17.5466 14.1945 17.3637 14.1262 17.0896 13.9896C16.8153 13.8528 15.4713 13.1805 15.2199 13.0891C14.9685 12.9981 14.7858 12.9525 14.6028 13.2263C14.4199 13.4995 13.8814 14.1315 13.7214 14.3139C13.5615 14.4965 13.4015 14.5193 13.1272 14.3826C12.8529 14.2454 11.9788 13.9517 10.9312 13.0208C10.1158 12.2963 9.55005 11.3723 9.39001 11.0988C9.23016 10.8254 9.37299 10.6774 9.5105 10.541C9.63373 10.4187 9.80017 10.2513 9.93732 10.0919C10.0743 9.93219 10.1133 9.8183 10.2048 9.63593C10.2962 9.45355 10.2504 9.29388 10.1819 9.15729C10.1133 9.02051 9.58704 7.66901 9.34314 7.12848H9.34332C9.13788 6.67328 8.92163 6.6579 8.72626 6.64984Z"
        fill={iconColor}
      />
    </Svg>
  );
}

export function WebsiteIcon({ width = 24, height = 24, color }: IconProps) {
  const colorScheme = useColorScheme();
  const iconColor =
    color || (colorScheme === "dark" ? Colors.WHITE[500] : Colors.DARK[500]);
  return (
    <Svg width={width} height={height} viewBox="0 0 24 24" fill="none">
      <Path
        d="M20.4703 3.4875C18.2062 1.2375 15.1922 0 11.9906 0C8.78906 0 5.77969 1.2375 3.51562 3.4875C1.24687 5.7375 0 8.72813 0 11.9109C0 15.0938 1.24687 18.0844 3.51562 20.3344C5.77969 22.5797 8.78906 23.8219 11.9906 23.8219C15.1922 23.8219 18.2016 22.5844 20.4656 20.3344C22.7344 18.0844 23.9812 15.0938 23.9812 11.9109C23.9812 8.72813 22.7344 5.7375 20.4703 3.4875ZM21.3469 8.08594H16.8984C16.8937 8.07188 16.8937 8.05781 16.8891 8.04375C16.4578 5.71406 15.825 3.75469 15.3328 2.4375C18.0562 3.38438 20.25 5.45625 21.3469 8.08594ZM10.6359 1.96875C11.0813 1.90781 11.5312 1.87969 11.9906 1.87969C12.3703 1.87969 12.7406 1.90313 13.1062 1.94063C13.5094 2.87344 14.4141 5.17031 14.9859 8.08594H9.18281C9.67031 4.84219 10.4813 2.41875 10.6359 1.96875ZM1.875 11.9109C1.875 11.2453 1.94062 10.5938 2.06719 9.96094H7.06875C6.89531 11.8406 6.88125 13.65 7.02656 15.3516H2.48906C2.09062 14.2781 1.875 13.1203 1.875 11.9109ZM3.41719 17.2266H7.26094C7.49531 18.6563 7.84688 20.0063 8.325 21.2578C6.28594 20.4703 4.56563 19.0406 3.41719 17.2266ZM7.28906 8.08594H2.63906C3.71719 5.50313 5.85 3.46406 8.49844 2.49375C8.14688 3.69375 7.63125 5.67656 7.28906 8.08594ZM13.3406 21.8531C12.9 21.9094 12.45 21.9422 11.9953 21.9422C11.5266 21.9422 11.0672 21.9094 10.6125 21.8484C9.9 20.3672 9.44063 18.7969 9.16875 17.2266H15.0797C14.7469 18.7875 14.1937 20.3578 13.3406 21.8531ZM15.3703 15.3516H8.91562C8.74219 13.4344 8.79844 11.5828 8.95312 9.96094H15.2906C15.4969 11.5875 15.5766 13.4391 15.3703 15.3516ZM15.7547 21.225C16.3078 19.9734 16.725 18.6375 16.9922 17.2266H20.5687C19.4391 19.0172 17.7516 20.4281 15.7547 21.225ZM17.2641 15.3516L17.2781 15.1828C17.4281 13.5234 17.3953 11.7703 17.1797 9.96094H21.9187C22.0453 10.5938 22.1109 11.2453 22.1109 11.9109C22.1109 13.1203 21.8953 14.2781 21.4969 15.3516H17.2641Z"
        fill={iconColor}
      />
    </Svg>
  );
}

export function Website2Icon({ width = 24, height = 24, color }: IconProps) {
  const colorScheme = useColorScheme();
  const iconColor =
    color || (colorScheme === "dark" ? Colors.WHITE[500] : Colors.DARK[500]);
  return (
    <Svg width={width} height={height} viewBox="0 0 24 24" fill="none">
      <Path
        d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
        stroke={iconColor}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M7.53906 12C7.53906 15.04 8.02906 18.08 8.99906 21H7.99906"
        stroke={iconColor}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M8.00039 3H9.00039C8.51039 4.46 8.15039 5.95 7.90039 7.46"
        stroke={iconColor}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M16.13 16.3601C15.88 17.9201 15.51 19.4801 15 21.0001"
        stroke={iconColor}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M15 3C15.97 5.92 16.46 8.96 16.46 12"
        stroke={iconColor}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M3 16V15C8.84 16.95 15.16 16.95 21 15V16"
        stroke={iconColor}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M3 9.0001C8.84 7.0501 15.16 7.0501 21 9.0001"
        stroke={iconColor}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
}

export function Facebook2Icon({ width = 24, height = 24, color }: IconProps) {
  const colorScheme = useColorScheme();
  const iconColor =
    color || (colorScheme === "dark" ? Colors.WHITE[500] : Colors.DARK[500]);
  return (
    <Svg width={width} height={height} viewBox="0 0 24 24" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.9613 0.363647C14.1247 0.388335 16.0792 0.920043 17.8247 1.95877C19.5493 2.97676 20.984 4.42019 21.9914 6.15102C23.0238 7.907 23.5523 9.87329 23.5769 12.0499C23.5156 15.028 22.5763 17.5716 20.759 19.6807C18.9416 21.7898 16.6141 23.0946 14.2046 23.5948V15.2451H16.4825L16.9977 11.9639H13.5483V9.81473C13.5292 9.36919 13.6701 8.93151 13.9455 8.58082C14.2214 8.22918 14.7072 8.04436 15.4029 8.02636H17.4858V5.15205C17.4559 5.14244 17.1723 5.10441 16.635 5.03798C16.0257 4.96668 15.4129 4.9286 14.7994 4.92391C13.4109 4.93031 12.3127 5.32199 11.505 6.09894C10.6972 6.87567 10.2846 7.99943 10.2671 9.47023V11.9639H7.64209V15.2451H10.2671V23.5948C7.30858 23.0946 4.98099 21.7898 3.16365 19.6807C1.34631 17.5716 0.407025 15.028 0.345703 12.0499C0.370237 9.87319 0.898731 7.9069 1.93118 6.15102C2.93866 4.42019 4.37332 2.97676 6.09798 1.95877C7.8434 0.920243 9.79784 0.388535 11.9613 0.363647Z"
        fill={iconColor}
      />
    </Svg>
  );
}

export function Facebook3Icon({ width = 24, height = 24, color }: IconProps) {
  const colorScheme = useColorScheme();
  const iconColor =
    color || (colorScheme === "dark" ? Colors.WHITE[500] : Colors.DARK[500]);
  return (
    <Svg width={width} height={height} viewBox="0 0 24 24" fill="none">
      <Path
        d="M14 9.29999V12.25H16.63C16.82 12.25 16.96 12.42 16.92 12.61L16.54 14.51C16.51 14.65 16.39 14.75 16.25 14.75H14V22H11V14.75H9.29999C9.12999 14.75 9 14.62 9 14.45V12.55C9 12.38 9.12999 12.25 9.29999 12.25H11V9C11 7.34 12.34 6 14 6H16.7C16.87 6 17 6.12999 17 6.29999V8.70001C17 8.87001 16.87 9 16.7 9H14.3C14.13 9 14 9.12999 14 9.29999Z"
        stroke={iconColor}
        stroke-width="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
      />
      <Path
        d="M2 12.83V15C2 20 4 22 9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9"
        stroke={iconColor}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
}

export function TwitterIcon({ width = 24, height = 24, color }: IconProps) {
  const colorScheme = useColorScheme();
  const iconColor =
    color || (colorScheme === "dark" ? Colors.WHITE[500] : Colors.DARK[500]);
  return (
    <Svg width={width} height={height} viewBox="0 0 24 24" fill="none">
      <Path
        d="M24 5.3085C23.1075 5.7 22.1565 5.9595 21.165 6.0855C22.185 5.4765 22.9635 4.5195 23.3295 3.366C22.3785 3.933 21.3285 4.3335 20.2095 4.557C19.3065 3.5955 18.0195 3 16.6155 3C13.8915 3 11.6985 5.211 11.6985 7.9215C11.6985 8.3115 11.7315 8.6865 11.8125 9.0435C7.722 8.844 4.1025 6.8835 1.671 3.897C1.2465 4.6335 0.9975 5.4765 0.9975 6.384C0.9975 8.088 1.875 9.5985 3.183 10.473C2.3925 10.458 1.617 10.2285 0.96 9.867C0.96 9.882 0.96 9.9015 0.96 9.921C0.96 12.312 2.6655 14.298 4.902 14.7555C4.5015 14.865 4.065 14.9175 3.612 14.9175C3.297 14.9175 2.979 14.8995 2.6805 14.8335C3.318 16.782 5.127 18.2145 7.278 18.261C5.604 19.5705 3.4785 20.3595 1.1775 20.3595C0.774 20.3595 0.387 20.3415 0 20.292C2.1795 21.6975 4.7625 22.5 7.548 22.5C16.602 22.5 21.552 15 21.552 8.499C21.552 8.2815 21.5445 8.0715 21.534 7.863C22.5105 7.17 23.331 6.3045 24 5.3085Z"
        fill={iconColor}
      />
    </Svg>
  );
}

export function InstagramIcon({ width = 24, height = 24, color }: IconProps) {
  const colorScheme = useColorScheme();
  const iconColor =
    color || (colorScheme === "dark" ? Colors.WHITE[500] : Colors.DARK[500]);
  return (
    <Svg width={width} height={height} viewBox="0 0 24 24" fill="none">
      <Path
        d="M12 8.33197C9.97603 8.33197 8.33203 9.97597 8.33203 12C8.33203 14.024 9.97603 15.672 12 15.672C14.024 15.672 15.672 14.024 15.672 12C15.672 9.97597 14.024 8.33197 12 8.33197Z"
        fill={iconColor}
      />
      <Path
        d="M17.536 2H6.464C4.004 2 2 4.004 2 6.464V17.536C2 20 4.004 22 6.464 22H17.536C20 22 22 20 22 17.536V6.464C22 4.004 20 2 17.536 2ZM12 18.48C8.428 18.48 5.52 15.572 5.52 12C5.52 8.428 8.428 5.524 12 5.524C15.572 5.524 18.48 8.428 18.48 12C18.48 15.572 15.572 18.48 12 18.48ZM18.616 6.7C17.86 6.7 17.244 6.088 17.244 5.332C17.244 4.576 17.86 3.96 18.616 3.96C19.372 3.96 19.988 4.576 19.988 5.332C19.988 6.088 19.372 6.7 18.616 6.7Z"
        fill={iconColor}
      />
    </Svg>
  );
}

export function Instagram2Icon({ width = 24, height = 24, color }: IconProps) {
  const colorScheme = useColorScheme();
  const iconColor =
    color || (colorScheme === "dark" ? Colors.WHITE[500] : Colors.DARK[500]);
  return (
    <Svg width={width} height={height} viewBox="0 0 24 24" fill="none">
      <Path
        d="M2 13.03V15C2 20 4 22 9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9"
        stroke={iconColor}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M12 15.5C13.933 15.5 15.5 13.933 15.5 12C15.5 10.067 13.933 8.5 12 8.5C10.067 8.5 8.5 10.067 8.5 12C8.5 13.933 10.067 15.5 12 15.5Z"
        stroke={iconColor}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M17.6361 7H17.6477"
        stroke={iconColor}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
}

export function VinaLogo({ width = 94, height = 34 }: IconProps) {
  return (
    <Svg width={width} height={height} viewBox="0 0 94 34" fill="none">
      <Rect width={94} height={34} fill="url(#pattern0_3369_41869)" />
      <Defs>
        <Pattern
          id="pattern0_3369_41869"
          patternContentUnits="objectBoundingBox"
          width={1}
          height={1}
        >
          <Image
            id="image0_3369_41869"
            width={1129}
            height={408}
            preserveAspectRatio="none"
            href={require("../../assets/icons/vina-logo.svg")}
          />
        </Pattern>
      </Defs>
    </Svg>
  );
}

export function CoinIcon({ width = 16, height = 16 }: IconProps) {
  return (
    <Svg width={width} height={height} viewBox="0 0 16 16" fill="none">
      <Rect width={16} height={16} fill="url(#pattern0_3369_41884)" />
      <Defs>
        <Pattern
          id="pattern0_3369_41884"
          patternContentUnits="objectBoundingBox"
          width={1}
          height={1}
        >
          <Image
            id="image0_3369_41884"
            width={512}
            height={512}
            preserveAspectRatio="none"
            href={require("../../assets/icons/coin.svg")}
          />
        </Pattern>
      </Defs>
    </Svg>
  );
}

export function StarIcon({ width = 24, height = 24, color }: IconProps) {
  const colorScheme = useColorScheme();
  const iconColor =
    color || (colorScheme === "dark" ? Colors.WHITE[500] : Colors.DARK[500]);
  return (
    <Svg width={width} height={height} viewBox="0 0 24 24" fill="none">
      <Path
        d="M20.0999 8.60989C22.1399 8.94989 22.6199 10.4299 21.1499 11.8899L18.6699 14.3699C18.2499 14.7899 18.0199 15.5999 18.1499 16.1799L18.8599 19.2499C19.4199 21.6799 18.1299 22.6199 15.9799 21.3499L12.9899 19.5799C12.4499 19.2599 11.5599 19.2599 11.0099 19.5799L8.01991 21.3499C5.87991 22.6199 4.57991 21.6699 5.13991 19.2499L5.84991 16.1799C5.97991 15.5999 5.74991 14.7899 5.32991 14.3699L2.84991 11.8899C1.38991 10.4299 1.85991 8.94989 3.89991 8.60989L7.08991 8.07989C7.61991 7.98989 8.25991 7.51989 8.49991 7.02989L10.2599 3.50989C11.2099 1.59989 12.7699 1.59989 13.7299 3.50989L15.4899 7.02989C15.5899 7.23989 15.7699 7.44989 15.9799 7.61989"
        stroke={iconColor}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
export function InfoIcon({ width = 24, height = 24, color }: IconProps) {
  const colorScheme = useColorScheme();
  const iconColor =
    color || (colorScheme === "dark" ? Colors.WHITE[500] : Colors.DARK[500]);
  return (
    <Svg width={width} height={height} viewBox="0 0 24 24" fill="none">
      <Path
        d="M12 8V13"
        stroke={iconColor}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M4 6C2.75 7.67 2 9.75 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2C10.57 2 9.2 2.3 7.97 2.85"
        stroke={iconColor}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M11.9941 16H12.0031"
        stroke={iconColor}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
}

export function LocateIcon({ width = 24, height = 24, color }: IconProps) {
  const colorScheme = useColorScheme();
  const iconColor =
    color || (colorScheme === "dark" ? Colors.WHITE[500] : Colors.DARK[500]);
  return (
    <Svg width={width} height={height} viewBox="0 0 24 24" fill="none">
      <Path
        d="M15.1209 10.3099C15.1209 12.0299 13.7309 13.4299 12.0009 13.4299C10.2709 13.4299 8.88086 12.0399 8.88086 10.3099C8.88086 8.57994 10.2809 7.18994 12.0009 7.18994C12.3409 7.18994 12.6709 7.23994 12.9709 7.33994"
        stroke={iconColor}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M5.98094 4.30006C10.3509 0.190061 18.8209 1.60006 20.3809 8.51006C21.5309 13.5901 18.3709 17.8901 15.6009 20.5501C13.5909 22.4901 10.4109 22.4901 8.39094 20.5501C5.63094 17.8801 2.46094 13.5801 3.62094 8.50006"
        stroke={iconColor}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
}

export function StickIcon({ width = 32, height = 32, color }: IconProps) {
  const colorScheme = useColorScheme();
  const iconColor =
    color || (colorScheme === "dark" ? Colors.DARK[500] : Colors.WHITE[500]);
  return (
    <Svg width={width} height={height} viewBox="0 0 32 32" fill="none">
      <Path
        d="M5.33268 7.99984C3.66602 10.2265 2.66602 12.9998 2.66602 15.9998C2.66602 23.3598 8.63935 29.3332 15.9993 29.3332C23.3593 29.3332 29.3327 23.3598 29.3327 15.9998C29.3327 8.63984 23.3593 2.6665 15.9993 2.6665C14.0927 2.6665 12.266 3.0665 10.626 3.79984"
        stroke={iconColor}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M20 13.8402L21.4933 12.3335"
        stroke={iconColor}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M10.5059 16L14.1592 19.6667L17.5592 16.28"
        stroke={iconColor}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
}
export function Clock2Icon({ width = 24, height = 24, color }: IconProps) {
  const colorScheme = useColorScheme();
  const iconColor =
    color || (colorScheme === "dark" ? Colors.WHITE[500] : Colors.DARK[500]);
  return (
    <Svg width={width} height={height} viewBox="0 0 24 24" fill="none">
      <Path
        d="M15.7109 15.18L12.6109 13.33C12.0709 13.01 11.6309 12.24 11.6309 11.61V7.51001"
        stroke={iconColor}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M4 6C2.75 7.67 2 9.75 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2C10.57 2 9.2 2.3 7.97 2.85"
        stroke={iconColor}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
}

export function PenEditIcon({ width = 24, height = 24, color }: IconProps) {
  const colorScheme = useColorScheme();
  const iconColor =
    color || (colorScheme === "dark" ? Colors.WHITE[500] : Colors.DARK[500]);
  return (
    <Svg width={width} height={height} viewBox="0 0 16 16" fill="none">
      <Path
        d="M11.5796 6.77963L12.4729 5.83296C13.4196 4.83296 13.8462 3.69296 12.3729 2.29963C10.8996 0.912959 9.78624 1.39963 8.83958 2.39963L3.36624 8.19296C3.15958 8.41296 2.95958 8.84629 2.91958 9.14629L2.67291 11.3063C2.58624 12.0863 3.14624 12.6196 3.91958 12.4863L6.06624 12.1196C6.36624 12.0663 6.78624 11.8463 6.99291 11.6196L9.62624 8.83296"
        stroke={iconColor}
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M7.92578 3.36719C8.21245 5.20719 9.70578 6.61385 11.5591 6.80052"
        stroke={iconColor}
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M2 14.666H9.33333"
        stroke={iconColor}
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M12 14.666H14"
        stroke={iconColor}
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
}

export function MoneyIcon({ width = 24, height = 24, color }: IconProps) {
  const colorScheme = useColorScheme();
  const iconColor =
    color || (colorScheme === "dark" ? Colors.WHITE[500] : Colors.DARK[500]);
  return (
    <Svg width={width} height={height} viewBox="0 0 24 24" fill="none">
      <Path
        d="M2 12.53V15.5C2 19 4 20.5 7 20.5H17C20 20.5 22 19 22 15.5V8.5C22 5 20 3.5 17 3.5H7C4 3.5 2 5 2 8.5V9H3C6 9 7 8 7 5V4"
        stroke={iconColor}
        stroke-width="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M15 12C15 10.34 13.66 9 12 9C10.34 9 9 10.34 9 12C9 13.66 10.34 15 12 15"
        stroke={iconColor}
        stroke-width="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M22 9H21C18 9 17 8 17 5V4"
        stroke={iconColor}
        stroke-width="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M2 15H3C6 15 7 16 7 19V20"
        stroke={iconColor}
        stroke-width="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M22 15H21C18 15 17 16 17 19V20"
        stroke={iconColor}
        stroke-width="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
}

export function CoinV2Icon({ width = 24, height = 24, color }: IconProps) {
  const colorScheme = useColorScheme();
  const iconColor =
    color || (colorScheme === "dark" ? Colors.WHITE[500] : Colors.DARK[500]);
  return (
    <Svg width={width} height={height} viewBox="0 0 24 25" fill="none">
      <Path
        d="M8 11.9C8 12.67 8.6 13.3 9.33 13.3H10.83C11.47 13.3 11.99 12.75 11.99 12.08C11.99 11.35 11.67 11.09 11.2 10.92L8.8 10.08C8.32 9.90995 8 9.64995 8 8.91995C8 8.24995 8.52 7.69995 9.16 7.69995H10.66C11.4 7.70995 12 8.32995 12 9.09995"
        stroke={iconColor}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M10 13.35V14.09"
        stroke={iconColor}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M10 6.91003V7.69003"
        stroke={iconColor}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M6.07 3.52C7.23 2.87 8.56 2.5 9.99 2.5C14.4 2.5 17.98 6.08 17.98 10.49C17.98 14.9 14.4 18.48 9.99 18.48C5.58 18.48 2 14.9 2 10.49C2 9.26 2.28 8.09 2.78 7.05"
        stroke={iconColor}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M12.9805 20.38C13.8805 21.65 15.3505 22.48 17.0305 22.48C19.7605 22.48 21.9805 20.26 21.9805 17.53C21.9805 15.87 21.1605 14.4 19.9105 13.5"
        stroke={iconColor}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
}

export function SoundIcon({ width = 24, height = 24, color }: IconProps) {
  const colorScheme = useColorScheme();
  const iconColor =
    color || (colorScheme === "dark" ? Colors.WHITE[500] : Colors.DARK[500]);
  return (
    <Svg width={width} height={height} viewBox="0 0 24 24" fill="none">
      <Path
        d="M4.1107 16.98C4.0207 17.3 3.9707 17.65 3.9707 18C3.9707 20.21 5.7607 22 7.9707 22C10.1807 22 11.9707 20.21 11.9707 18C11.9707 15.79 10.1807 14 7.9707 14C7.6207 14 7.2707 14.05 6.9507 14.13"
        stroke={iconColor}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M11.9707 18V4"
        stroke={iconColor}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M14.6105 2.11L19.0305 3.58C20.1005 3.94 20.9805 5.15 20.9805 6.28V7.45C20.9805 8.98 19.8005 9.83 18.3505 9.35L13.9305 7.88C12.8605 7.52 11.9805 6.31 11.9805 5.18V4C11.9705 2.48 13.1605 1.62 14.6105 2.11Z"
        stroke={iconColor}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
}

export function RotateIcon({ width = 24, height = 24, color }: IconProps) {
  const colorScheme = useColorScheme();
  const iconColor =
    color || (colorScheme === "dark" ? Colors.WHITE[500] : Colors.DARK[500]);
  return (
    <Svg width={width} height={height} viewBox="0 0 21 18" fill="none">
      <G clipPath="url(#clip0_3295_24876)">
        <Path
          d="M16.5261 15.6127C14.9283 17.1406 12.8739 18 10.6826 18C5.93478 18 2.1 13.9416 2.1 8.97613H0L3.15 5.72945L6.3 9.02388H4.15435C4.15435 12.7958 7.07609 15.8515 10.6826 15.8515C12.3261 15.8515 13.9239 15.2308 15.1109 14.0371L16.5261 15.6127Z"
          fill={iconColor}
        />
        <Path
          d="M21 8.97613L17.8956 12.2706L14.7456 8.97613H16.8913C16.8913 5.20424 13.9695 2.14854 10.363 2.14854C8.71953 2.14854 7.1217 2.76923 5.93475 3.96286L4.51953 2.38727C6.11736 0.859416 8.17171 0 10.363 0C15.1108 0 18.9456 4.05836 18.9456 8.97613H21Z"
          fill={iconColor}
        />
      </G>
      <Defs>
        <ClipPath id="clip0_3295_24876">
          <Rect width={21} height={18} fill={iconColor} />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export function SpeedIcon({ width = 24, height = 24, color }: IconProps) {
  const colorScheme = useColorScheme();
  const iconColor =
    color || (colorScheme === "dark" ? Colors.WHITE[500] : Colors.DARK[500]);
  return (
    <Svg width={width} height={height} viewBox="0 0 19 21" fill="none">
      <G clipPath="url(#clip0_3295_24880)">
        <Path
          d="M9.5 0C4.25862 0 0 4.46495 0 9.96028C0 11.4813 0.327586 12.9533 0.935961 14.3271H3.74384L5.75616 12.2173H9.03202V14.3271H17.9704C18.5788 12.9533 18.9064 11.4813 18.9064 9.96028C19 4.46495 14.7414 0 9.5 0ZM13.899 5.74065L10.436 10.9416C9.17241 12.6589 6.92611 10.3528 8.56404 8.97897L13.5246 5.34813C13.7586 5.15187 14.0862 5.49533 13.899 5.74065Z"
          fill={iconColor}
        />
      </G>
      <Defs>
        <ClipPath id="clip0_3295_24880">
          <Rect width={19} height={21} fill={iconColor} />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export function BlurIcon({ width = 24, height = 24, color }: IconProps) {
  const colorScheme = useColorScheme();
  const iconColor =
    color || (colorScheme === "dark" ? Colors.WHITE[500] : Colors.DARK[500]);
  return (
    <Svg width={width} height={height} viewBox="0 0 19 19" fill="none">
      <Path
        d="M14.8536 5.32987C14.8536 5.97143 14.7549 6.61299 14.5082 7.15584C14.2614 7.15584 13.9653 7.10649 13.6692 7.10649C12.09 7.10649 10.6588 7.64935 9.52375 8.58701C8.38869 7.6987 6.90817 7.10649 5.32895 7.10649C5.03284 7.10649 4.73674 7.10649 4.48999 7.15584C4.29258 6.61299 4.14453 5.97143 4.14453 5.32987C4.14453 2.36883 6.56271 0 9.52375 0C12.4354 0 14.8536 2.36883 14.8536 5.32987Z"
        fill={iconColor}
      />
      <Path
        d="M7.10649 13.6701C7.10649 15.2493 7.6987 16.7299 8.63636 17.8649C7.74805 18.5558 6.61299 19 5.32987 19C2.41818 19 0 16.6312 0 13.6701C0 10.7091 2.41818 8.34026 5.32987 8.34026C6.56364 8.34026 7.74805 8.78441 8.63636 9.47532C7.6987 10.6104 7.10649 12.0909 7.10649 13.6701Z"
        fill={iconColor}
      />
      <Path
        d="M19.0001 13.6701C19.0001 16.6312 16.5819 19 13.6702 19C10.7585 19 8.29102 16.6312 8.29102 13.6701C8.29102 10.7091 10.6598 8.34026 13.6209 8.34026C16.5819 8.34026 19.0001 10.7091 19.0001 13.6701Z"
        fill={iconColor}
      />
    </Svg>
  );
}

export function SmilePhotoIcon({ width = 24, height = 24, color }: IconProps) {
  const colorScheme = useColorScheme();
  const iconColor =
    color || (colorScheme === "dark" ? Colors.WHITE[500] : Colors.DARK[500]);
  return (
    <Svg width={width} height={height} viewBox="0 0 34 34" fill="none">
      <Path
        d="M16.6407 33.3968C25.8311 33.3968 33.2813 25.9771 33.2813 16.8245C33.2813 7.67187 25.8311 0.252197 16.6407 0.252197C7.45028 0.252197 0 7.67187 0 16.8245C0 25.9771 7.45028 33.3968 16.6407 33.3968Z"
        fill={iconColor}
      />
      <Path
        d="M3.37107 2.6284C3.54937 3.69376 3.01449 4.69994 2.18245 4.81832C1.35042 4.93669 0.518387 4.16726 0.399525 3.1019C0.221232 2.03654 0.756111 1.03036 1.58814 0.911982C2.36075 0.793609 3.19278 1.56304 3.37107 2.6284Z"
        fill="#5B2D30"
      />
    </Svg>
  );
}

export function AddPhotoIcon({ width = 24, height = 24, color }: IconProps) {
  const colorScheme = useColorScheme();
  const iconColor =
    color || (colorScheme === "dark" ? Colors.WHITE[500] : Colors.DARK[500]);
  return (
    <Svg width={width} height={height} viewBox="0 0 36 34" fill="none">
      <Path
        d="M30.6622 0.252197H5.10686C2.67019 0.252197 0.708984 2.20536 0.708984 4.63202V29.0762C0.708984 31.5028 2.67019 33.456 5.10686 33.456H30.6622C33.0989 33.456 35.0601 31.5028 35.0601 29.1946V4.75039C35.0006 2.20536 33.0394 0.252197 30.6622 0.252197Z"
        fill={iconColor}
      />
    </Svg>
  );
}

export function Chat2Icon({ width = 24, height = 24, color }: IconProps) {
  const colorScheme = useColorScheme();
  const iconColor =
    color || (colorScheme === "dark" ? Colors.WHITE[500] : Colors.DARK[500]);
  return (
    <Svg width={width} height={height} viewBox="0 0 24 24" fill="none">
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M12.0067 2C13.6245 2 15.2361 2.39907 16.668 3.15403C21.5432 5.72638 23.4181 11.7855 20.8475 16.6624C19.0942 19.9879 15.642 22 11.9953 22C11.2829 22 10.5634 21.9234 9.84741 21.7648C9.44408 21.6749 9.18957 21.275 9.27851 20.8715C9.36746 20.468 9.76639 20.2152 10.1724 20.3024C13.8966 21.1305 17.7415 19.3431 19.523 15.9638C21.7088 11.8181 20.1148 6.66546 15.9696 4.47897C14.7526 3.83676 13.3823 3.4976 12.0059 3.4976H11.9962C7.31028 3.4976 3.4971 7.31119 3.4971 11.9987C3.49534 13.3641 3.82822 14.7234 4.45964 15.9312L4.65162 16.3065C4.88675 16.747 4.93871 17.294 4.78636 17.7891C4.57588 18.3441 4.40064 18.8841 4.25621 19.4215C4.81806 19.2523 5.50408 19.003 5.99988 18.8224L6.20331 18.7493C6.58815 18.6057 7.02055 18.8092 7.16145 19.1986C7.30235 19.5871 7.10069 20.017 6.71232 20.1571L6.51154 20.2302L6.47736 20.2426L6.47733 20.2426C5.73908 20.5101 4.74506 20.8703 4.0704 21.0213C4.01227 21.0336 3.94975 21.0415 3.89251 21.0398C3.43281 21.0398 3.15277 20.8539 2.99865 20.6971C2.76176 20.4566 2.64904 20.1192 2.66225 19.6946C2.66401 19.6461 2.67017 19.5959 2.68162 19.5475C2.85951 18.7899 3.09112 18.034 3.37117 17.3019C3.39142 17.2306 3.37909 17.1011 3.32185 16.9927L3.12899 16.6183C2.39013 15.2035 1.99824 13.6029 2.00001 11.9978C2.00001 6.48487 6.48424 2 11.9953 2H12.0067ZM6.40348 11.9991C6.40348 11.3428 6.93627 10.8098 7.59235 10.8098C8.24843 10.8098 8.78122 11.3428 8.78122 11.9991C8.78122 12.6545 8.24843 13.1875 7.59235 13.1875C6.93627 13.1875 6.40348 12.6545 6.40348 11.9991ZM13.1845 11.9988C13.1845 11.3433 12.6517 10.8095 11.9956 10.8095C11.3396 10.8095 10.8068 11.3433 10.8068 11.9988C10.8068 12.6542 11.3396 13.188 11.9956 13.188C12.6517 13.188 13.1845 12.6542 13.1845 11.9988ZM16.3989 10.8095C17.0549 10.8095 17.5877 11.3433 17.5877 11.9988C17.5877 12.6542 17.0549 13.188 16.3989 13.188C15.7428 13.188 15.21 12.6542 15.21 11.9988C15.21 11.3433 15.7428 10.8095 16.3989 10.8095Z"
        fill={iconColor}
      />
    </Svg>
  );
}

export function FeatherIcon({ width = 24, height = 24, color }: IconProps) {
  const colorScheme = useColorScheme();
  const iconColor =
    color || (colorScheme === "dark" ? Colors.WHITE[500] : Colors.DARK[500]);
  return (
    <Svg width={width} height={height} viewBox="0 0 24 24" fill="none">
      <Path
        d="M18 8C19.6569 8 21 6.65685 21 5C21 3.34315 19.6569 2 18 2C16.3431 2 15 3.34315 15 5C15 6.65685 16.3431 8 18 8Z"
        stroke={iconColor}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M6 15C7.65685 15 9 13.6569 9 12C9 10.3431 7.65685 9 6 9C4.34315 9 3 10.3431 3 12C3 13.6569 4.34315 15 6 15Z"
        stroke={iconColor}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M18 22C19.6569 22 21 20.6569 21 19C21 17.3431 19.6569 16 18 16C16.3431 16 15 17.3431 15 19C15 20.6569 16.3431 22 18 22Z"
        stroke={iconColor}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M8.58984 13.5098L15.4198 17.4898"
        stroke={iconColor}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M15.4098 6.50977L8.58984 10.4898"
        stroke={iconColor}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
}

export function HeartIcon({ width = 24, height = 24, color }: IconProps) {
  const colorScheme = useColorScheme();
  const iconColor =
    color || (colorScheme === "dark" ? Colors.WHITE[500] : Colors.DARK[500]);
  return (
    <Svg width={width} height={height} viewBox="0 0 24 24" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.82396 12.1231C5.22596 16.4851 10.765 20.0121 12.237 20.8851C13.714 20.0031 19.293 16.4371 20.65 12.1271C21.541 9.34112 20.714 5.81212 17.428 4.75312C15.836 4.24212 13.979 4.55312 12.697 5.54512C12.429 5.75112 12.057 5.75512 11.787 5.55112C10.429 4.53012 8.65496 4.23112 7.03796 4.75312C3.75696 5.81112 2.93296 9.34012 3.82396 12.1231ZM12.238 22.5011C12.114 22.5011 11.991 22.4711 11.879 22.4101C11.566 22.2391 4.19296 18.1751 2.39596 12.5811C2.39496 12.5811 2.39496 12.5801 2.39496 12.5801C1.26696 9.05812 2.52296 4.63212 6.57796 3.32512C8.48196 2.70912 10.557 2.98012 12.235 4.03912C13.861 3.01112 16.021 2.72712 17.887 3.32512C21.946 4.63412 23.206 9.05912 22.079 12.5801C20.34 18.1101 12.913 22.2351 12.598 22.4081C12.486 22.4701 12.362 22.5011 12.238 22.5011Z"
        fill={iconColor}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.1547 10.6248C17.7677 10.6248 17.4397 10.3278 17.4077 9.93578C17.3417 9.11378 16.7917 8.41978 16.0087 8.16678C15.6137 8.03878 15.3977 7.61578 15.5247 7.22278C15.6537 6.82878 16.0727 6.61478 16.4687 6.73878C17.8317 7.17978 18.7867 8.38678 18.9037 9.81378C18.9367 10.2268 18.6297 10.5888 18.2167 10.6218C18.1957 10.6238 18.1757 10.6248 18.1547 10.6248Z"
        fill={iconColor}
      />
    </Svg>
  );
}

export function AddFriendIcon({ width = 24, height = 24, color }: IconProps) {
  const colorScheme = useColorScheme();
  const iconColor =
    color || (colorScheme === "dark" ? Colors.WHITE[500] : Colors.DARK[500]);
  return (
    <Svg width={width} height={height} viewBox="0 0 25 24" fill="none">
      <Path
        d="M8.06 3.09998C9.87 3.09998 11.49 3.98002 12.5 5.33002C13.51 3.98002 15.13 3.09998 16.94 3.09998C20.01 3.09998 22.5 5.6 22.5 8.69C22.5 10.66 21.99 12.4 21.19 13.91C20.31 12.98 19.07 12.4 17.7 12.4C15.05 12.4 12.9 14.55 12.9 17.2C12.9 18.43 13.37 19.55 14.13 20.4C13.76 20.57 13.42 20.71 13.12 20.81C12.78 20.93 12.22 20.93 11.88 20.81C8.98 19.82 2.5 15.69 2.5 8.69C2.5 7.14 3.12 5.73998 4.13 4.72998"
        stroke={iconColor}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M17.6984 22C20.3494 22 22.4984 19.851 22.4984 17.2C22.4984 14.549 20.3494 12.4 17.6984 12.4C15.0475 12.4 12.8984 14.549 12.8984 17.2C12.8984 19.851 15.0475 22 17.6984 22Z"
        stroke={iconColor}
        stroke-width="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M19.4902 17.26H15.9102"
        stroke={iconColor}
        stroke-width="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M17.6992 15.51V19.1"
        stroke={iconColor}
        stroke-width="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
}

export function NewFeedIcon({ width = 24, height = 24, color }: IconProps) {
  const colorScheme = useColorScheme();
  const iconColor =
    color || (colorScheme === "dark" ? Colors.WHITE[500] : Colors.DARK[500]);
  return (
    <Svg width={width} height={height} viewBox="0 0 24 24" fill="none">
      <Path
        d="M3 4.96997C3 3.32997 4.34 2 6 2H18C19.66 2 21 3.32997 21 4.96997V15.88C21 17.52 19.66 18.85 18 18.85H17.24C16.44 18.85 15.68 19.16 15.12 19.72L13.41 21.41C12.63 22.18 11.36 22.18 10.58 21.41L8.87 19.72C8.31 19.16 7.54 18.85 6.75 18.85H6C4.34 18.85 3 17.52 3 15.88V9.03998"
        stroke={iconColor}
        stroke-width="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M12.28 14.96C12.13 15.01 11.88 15.01 11.72 14.96C10.42 14.51 7.5 12.66 7.5 9.51001C7.5 8.12001 8.62 7 10 7C10.82 7 11.54 7.39 12 8C12.46 7.39 13.18 7 14 7C15.38 7 16.5 8.12001 16.5 9.51001C16.5 10.67 16.11 11.65 15.55 12.45"
        stroke={iconColor}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
}

export function SearchHomeIcon({ width = 24, height = 24, color }: IconProps) {
  const colorScheme = useColorScheme();
  const iconColor =
    color || (colorScheme === "dark" ? Colors.WHITE[500] : Colors.DARK[500]);
  return (
    <Svg width={width} height={height} viewBox="0 0 20 20" fill="none">
      <Path
        d="M1.66602 9.58268C1.66602 5.20768 5.20768 1.66602 9.58268 1.66602"
        stroke={iconColor}
        stroke-width="1.3"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M17.4996 9.58398C17.4996 13.959 13.9579 17.5007 9.58294 17.5007C6.46628 17.5007 3.76628 15.7007 2.47461 13.0757"
        stroke={iconColor}
        stroke-width="1.3"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M18.3327 18.3327L16.666 16.666"
        stroke={iconColor}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M12.0833 5.10921C11.7916 4.19255 12.1333 3.05088 13.0999 2.74255C13.6083 2.57588 14.2333 2.71755 14.5916 3.20921C14.9249 2.70088 15.5749 2.58421 16.0749 2.74255C17.0416 3.05088 17.3833 4.19255 17.0916 5.10921C16.6333 6.56755 15.0333 7.32588 14.5916 7.32588C14.1416 7.32588 12.5583 6.58421 12.0833 5.10921Z"
        stroke={iconColor}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
}

export function ProfileIcon({ width = 24, height = 24, color }: IconProps) {
  const colorScheme = useColorScheme();
  const iconColor =
    color || (colorScheme === "dark" ? Colors.WHITE[500] : Colors.DARK[500]);
  return (
    <Svg width={width} height={height} viewBox="0 0 24 24" fill="none">
      <Path
        d="M15.6792 3.96C16.1592 4.67 16.4392 5.52 16.4392 6.44C16.4292 8.84 14.5392 10.79 12.1592 10.87C12.0592 10.86 11.9392 10.86 11.8292 10.87C9.61922 10.8 7.82922 9.11 7.58922 6.95C7.29922 4.38 9.40922 2 11.9892 2"
        stroke={iconColor}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M6.99078 14.56C4.57078 16.18 4.57078 18.82 6.99078 20.43C9.74078 22.27 14.2508 22.27 17.0008 20.43C19.4208 18.81 19.4208 16.17 17.0008 14.56C14.2708 12.73 9.76078 12.73 6.99078 14.56Z"
        stroke={iconColor}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
}
