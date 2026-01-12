import { Timestamp } from "firebase-admin/firestore";

type Lang = "en" | "fr";

type EngineFault = {
  Blinks: number;
  FailureCode: string;
  Priority: number;
  FaultDescription: Record<Lang, string>;
  FaultManagement: Record<Lang, string[]>;
};

type CommunityPost = {
  id: string;
  title: string;
  Details: string;
  owner: {
    id: string;
    name: string;
    avatarUrl: string;
  };
  reply: CommunityReply[];
  createdAt: Timestamp;
};

type CommunityReply = {
  id: string;
  content: string;
  createdAt: Timestamp;
  owner: {
    id: string;
    name: string;
    avatarUrl: string;
    likes: {
      likerId: string;
    }[];
  };
};
