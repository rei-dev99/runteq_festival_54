import Link from "next/link";
import { FC } from "react";
import { FaGithub } from "react-icons/fa";
import XIcon from "@mui/icons-material/X";
import { SiMattermost } from "react-icons/si";
import GroupsIcon from '@mui/icons-material/Groups';

const socials = [
  { icon: <FaGithub />, path: "https://github.com/ryota10000" },
  { icon: <XIcon />, path: "https://x.com/sh7hs71" },
  { icon: <SiMattermost />, path: "https://chat.runteq.jp/runteq/channels/times_54b_shimizu_ryota" },
  { icon: <GroupsIcon />, path: "https://school.runteq.jp/social_portfolios/rio" }
];

// プロップの型定義
interface SocialProps {
  containerStyles: string;
  iconStyles: string;
}

const Social: FC<SocialProps> = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link key={index} href={item.path} legacyBehavior>
            <a className={iconStyles} target="_blank" rel="noopener noreferrer">
              {item.icon}
            </a>
          </Link>
        );
      })}
    </div>
  );
};

export default Social;
