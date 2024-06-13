import {
  AvatarIcon,
  DashboardIcon,
  GitHubLogoIcon,
  ImageIcon,
  InstagramLogoIcon,
} from "@radix-ui/react-icons";

export type IconProps = React.HTMLAttributes<SVGElement>;

export const Icons = {
  instagram: InstagramLogoIcon,
  gitHub: GitHubLogoIcon,
  dashboard: DashboardIcon,
  avatar: AvatarIcon,
  placeholder: ImageIcon,
  logo: ({ ...props }: IconProps) => (
    <svg
      width="33"
      height="13"
      viewBox="0 0 33 13"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M5.62913 12.256C4.48779 12.256 3.50113 12.0213 2.66913 11.552C1.83713 11.072 1.20246 10.3893 0.765125 9.504C0.327792 8.608 0.109125 7.552 0.109125 6.336C0.109125 5.12 0.327792 4.064 0.765125 3.168C1.21313 2.272 1.84779 1.584 2.66913 1.104C3.50113 0.624 4.48779 0.384 5.62913 0.384C6.77046 0.384 7.75713 0.624 8.58913 1.104C9.42113 1.584 10.0558 2.272 10.4931 3.168C10.9411 4.064 11.1651 5.12 11.1651 6.336C11.1651 7.552 10.9411 8.608 10.4931 9.504C10.0558 10.3893 9.42113 11.072 8.58913 11.552C7.75713 12.0213 6.77046 12.256 5.62913 12.256ZM5.62913 10.208C6.58913 10.208 7.33579 9.872 7.86913 9.2C8.40246 8.51733 8.66913 7.56267 8.66913 6.336C8.66913 5.10933 8.39713 4.15467 7.85313 3.472C7.31979 2.77867 6.57846 2.432 5.62913 2.432C4.67979 2.432 3.93846 2.77867 3.40513 3.472C2.87179 4.15467 2.60513 5.10933 2.60513 6.336C2.60513 7.56267 2.87179 8.51733 3.40513 9.2C3.93846 9.872 4.67979 10.208 5.62913 10.208ZM12.7934 0.639999H15.2254V9.952H20.4574V12H12.7934V0.639999ZM25.3513 6.304L21.5113 0.639999H24.3433L26.8233 4.464L29.2233 0.639999H32.0553L28.2313 6.272L32.1033 12H29.2713L26.7913 8.112L24.3113 12H21.4793L25.3513 6.304Z"
        fill="currentColor"
      />
    </svg>
  ),
  google: ({ ...props }: IconProps) => (
    <svg role="img" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"
      />
    </svg>
  ),
  discord: ({ ...props }: IconProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
      <path
        fill="currentColor"
        d="M524.531,69.836a1.5,1.5,0,0,0-.764-.7A485.065,485.065,0,0,0,404.081,32.03a1.816,1.816,0,0,0-1.923.91,337.461,337.461,0,0,0-14.9,30.6,447.848,447.848,0,0,0-134.426,0,309.541,309.541,0,0,0-15.135-30.6,1.89,1.89,0,0,0-1.924-.91A483.689,483.689,0,0,0,116.085,69.137a1.712,1.712,0,0,0-.788.676C39.068,183.651,18.186,294.69,28.43,404.354a2.016,2.016,0,0,0,.765,1.375A487.666,487.666,0,0,0,176.02,479.918a1.9,1.9,0,0,0,2.063-.676A348.2,348.2,0,0,0,208.12,430.4a1.86,1.86,0,0,0-1.019-2.588,321.173,321.173,0,0,1-45.868-21.853,1.885,1.885,0,0,1-.185-3.126c3.082-2.309,6.166-4.711,9.109-7.137a1.819,1.819,0,0,1,1.9-.256c96.229,43.917,200.41,43.917,295.5,0a1.812,1.812,0,0,1,1.924.233c2.944,2.426,6.027,4.851,9.132,7.16a1.884,1.884,0,0,1-.162,3.126,301.407,301.407,0,0,1-45.89,21.83,1.875,1.875,0,0,0-1,2.611,391.055,391.055,0,0,0,30.014,48.815,1.864,1.864,0,0,0,2.063.7A486.048,486.048,0,0,0,610.7,405.729a1.882,1.882,0,0,0,.765-1.352C623.729,277.594,590.933,167.465,524.531,69.836ZM222.491,337.58c-28.972,0-52.844-26.587-52.844-59.239S193.056,219.1,222.491,219.1c29.665,0,53.306,26.82,52.843,59.239C275.334,310.993,251.924,337.58,222.491,337.58Zm195.38,0c-28.971,0-52.843-26.587-52.843-59.239S388.437,219.1,417.871,219.1c29.667,0,53.307,26.82,52.844,59.239C470.715,310.993,447.538,337.58,417.871,337.58Z"
      />
    </svg>
  ),
  spinner: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M21 12a9 9 0 1 1-6.219-8.56" />
    </svg>
  ),
};
