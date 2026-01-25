export type Section = OverviewSection | KeyPointsSection;

interface BaseSection {
  section_id: string;
  type: string;
}

export interface OverviewSection extends BaseSection {
  type: "overview";
  text: string;
}

export interface KeyPointsSection extends BaseSection {
  type: "key_points";
  items: string[];
}

type Work = {
  id: string;
  cover_small: string;
  title: string;
  author: string;
  year: number;
  type: string;
  language: string;
};

type Chapter = {
  chapter_id: number;
  title: string;
  bullets: string[];
};

type Analysis = {
  summary: string[];
  context: string[];
  critique: string[];
};

export type Book = {
  work: Work;
  sections: Section[];
  chapters: Chapter[];
  analysis: Analysis;
};
