import React from 'react';

interface TemperatureIconProps {
  width?: string;
  fillInterior?: string;
  fillExterior?: string;
}

export const TemperatureIcon = (props: TemperatureIconProps) => (
  <svg viewBox="0 0 50 50" width={props.width}>
    <path
      fill={props.fillExterior}
      d="M31.5353 15.8531l2.6162 2.6162 -30.2796 30.2796c-0.446,0.4461 -1.1642,0.4579 -1.5959,0.0262l-1.0465 -1.0465c-0.4317,-0.4317 -0.4199,-1.1498 0.0262,-1.5959l30.2796 -30.2796z"
    />
    <path
      fill={props.fillInterior}
      d="M47.0633 1.2613l1.6801 1.68 0.1358 0.143 0.1405 0.1628 0.131 0.1682 0.1225 0.1737 0.1125 0.1782 0.1033 0.1818 0.0936 0.1857 0.0846 0.1893 0.075 0.1927 0.0652 0.194 0.0558 0.1963 0.0466 0.1993 0.0366 0.1999 0.0273 0.2001 0.0179 0.2018 0.0084 0.2036 -0.0015 0.2035 -0.0111 0.2022 -0.0207 0.2014 -0.0304 0.2018 -0.0406 0.2007 -0.05 0.1979 -0.0599 0.196 -0.0701 0.1949 -0.0806 0.1919 -0.09 0.1881 -0.1005 0.1846 -0.1102 0.18 -0.1206 0.1757 -0.1301 0.1698 -0.1398 0.164 -0.1353 0.1429 -30.6827 30.6826 -0.1952 0.1836 -0.2192 0.1822 -0.2245 0.1635 -0.2288 0.1458 -0.2311 0.1275 -0.2299 0.1095 -0.2274 0.0929 -0.2238 0.0783 -0.2169 0.0643 -0.209 0.0531 -0.2011 0.0437 -0.1924 0.0364 -0.1823 0.0302 -0.1728 0.0266 -0.1645 0.024 -0.1564 0.0228 -0.1471 0.022 -0.137 0.0223 -0.1297 0.0237 -0.1229 0.0258 -0.1161 0.0277 -0.1101 0.0305 -0.1054 0.0337 -0.1027 0.0381 -0.1009 0.0426 -0.0997 0.0484 -0.1009 0.0554 -0.1038 0.0644 -0.1078 0.0751 -0.1123 0.0872 -0.1179 0.1018 -0.1373 0.131 -6.5979 6.5978 -0.307 0.2888 -0.331 0.274 -0.3381 0.2433 -0.3451 0.2127 -0.3516 0.181 -0.3578 0.1489 -0.3634 0.1154 -0.3684 0.0806 -0.3711 0.0438 -0.3714 0.0052 -0.369 -0.0351 -0.3637 -0.0772 -0.3527 -0.1207 -0.3364 -0.1638 -0.3136 -0.2064 -0.2853 -0.2458 -0.251 -0.2824 -0.2115 -0.3117 -0.1689 -0.3358 -0.1253 -0.3531 -0.0811 -0.3657 -0.0377 -0.3716 0.0036 -0.3737 0.0432 -0.3727 0.0806 -0.3702 0.1161 -0.365 0.1498 -0.3593 0.1825 -0.353 0.2143 -0.3465 0.2454 -0.3398 0.2764 -0.333 0.2917 -0.3096 6.5971 -6.5971 0.1308 -0.1373 0.1015 -0.1178 0.0875 -0.1126 0.0749 -0.1075 0.0642 -0.1036 0.0558 -0.1015 0.0483 -0.0999 0.0424 -0.1 0.0378 -0.1026 0.034 -0.106 0.0305 -0.1101 0.0277 -0.1158 0.0256 -0.1231 0.0238 -0.1302 0.0226 -0.1378 0.022 -0.146 0.0226 -0.1557 0.024 -0.1648 0.0266 -0.1738 0.0307 -0.1831 0.0363 -0.1915 0.0436 -0.2008 0.0531 -0.209 0.0645 -0.2173 0.0783 -0.2237 0.093 -0.2272 0.1095 -0.2299 0.1275 -0.2312 0.1458 -0.2286 0.1635 -0.2245 0.1822 -0.2192 0.1837 -0.1953 30.6826 -30.6826 0.1429 -0.1354 0.1639 -0.1397 0.1699 -0.1301 0.1757 -0.1206 0.18 -0.1102 0.1846 -0.1005 0.1881 -0.09 0.1919 -0.0806 0.1949 -0.0701 0.1959 -0.0599 0.1979 -0.05 0.2004 -0.0405 0.2017 -0.0305 0.2015 -0.0208 0.2025 -0.0111 0.2029 -0.0014 0.2032 0.0081 0.2021 0.0179 0.2005 0.0272 0.2001 0.0369 0.1989 0.0464 0.1968 0.0559 0.1942 0.0653 0.1925 0.075 0.1889 0.0844 0.1859 0.0937 0.1819 0.1033 0.1783 0.1126 0.1734 0.1222 0.1683 0.1311 0.163 0.1405 0.143 0.1361zm-32.3142 35.1003l2.1988 2.1989c0.0313,-0.0288 0.0623,-0.0582 0.0933,-0.0892l0.5111 -0.5111 -2.2009 -2.2009 0.3879 -0.3879 2.2009 2.2009 0.6026 -0.6026 -2.2009 -2.2009 0.3877 -0.3877 2.2009 2.2009 0.602 -0.6021 -2.2008 -2.2008 0.3877 -0.3878 2.2009 2.2009 0.602 -0.602 -3.9532 -3.9533 0.3878 -0.3878 3.9532 3.9533 0.6025 -0.6025 -2.2009 -2.2009 0.3878 -0.3878 2.2009 2.2009 0.6021 -0.6022 -2.2008 -2.2008 0.3879 -0.3879 2.2009 2.2008 0.6026 -0.6026 -2.2009 -2.2009 0.3877 -0.3877 2.2009 2.2009 0.602 -0.602 -2.2008 -2.2009 0.3877 -0.3878 2.2009 2.2009 0.602 -0.6021 -4.6381 -4.6381 0.3877 -0.3877 4.6381 4.6381 0.6027 -0.6026 -2.2009 -2.2009 0.3877 -0.3877 2.2009 2.2009 0.6023 -0.6023 -2.2009 -2.2009 0.3879 -0.3878 2.2009 2.2008 0.6023 -0.6023 -2.2009 -2.2009 0.3879 -0.3879 2.2009 2.2009 0.6021 -0.6021 -2.2008 -2.2009 -1.7524 -1.7524 0.3877 -0.3877 1.7523 1.7524 2.2009 2.2009 1.5925 -1.5925 -2.2009 -2.2008 0.3877 -0.3878 2.2009 2.2009 0.6022 -0.6022 -2.2008 -2.2009 0.3875 -0.3875 2.2009 2.2008 0.6026 -0.6026 -2.2009 -2.2009 0.3879 -0.3879 2.2009 2.2009 0.6021 -0.6021 -2.2009 -2.2009 0.3878 -0.3878 2.2009 2.2009 0.602 -0.602 -4.6381 -4.6382 0.3877 -0.3877 4.6381 4.6382 0.6026 -0.6026 -2.2008 -2.2009 0.3877 -0.3878 2.2009 2.2009 0.6023 -0.6023 -2.2009 -2.2008 0.3878 -0.3879 2.2009 2.2009 0.6025 -0.6025 -2.2008 -2.2009 0.3877 -0.3878 2.2009 2.2009 0.6022 -0.6022 -2.2009 -2.2008 0.3877 -0.3877 2.2009 2.2008 0.6289 -0.6288 -5.5079 -5.5079 -23.3094 23.3094c-1.5204,1.5204 -0.3058,3.2189 -2.2177,5.1308l-6.594 6.594c-2.7504,2.7504 -0.1163,5.306 2.5948,2.5949l6.5941 -6.5941c1.6925,-1.6925 3.2163,-0.9366 4.5979,-1.7928l-2.147 -2.147 0.3877 -0.3877z"
    />
  </svg>
  //   Culoarea și mărimea pe care le-ași sugera pentru storybook (sau folosirea iconiței în App.tsx):
  //   <TemperatureIcon
  //   width="500"
  //   fillInterior="#00A5AD"
  //   fillExterior="#F0BCBF"
  // />
);
