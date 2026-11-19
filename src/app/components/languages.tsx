import { Section } from "@/components/ui/section";
import { TagList } from "@/components/ui/tag-list";
import { SECTION_TITLES } from "@/data/resume-data";

interface LanguagesProps {
  languages: readonly string[];
}

export function Languages({ languages }: LanguagesProps) {
  return (
    <Section title={SECTION_TITLES.languages} titleId="languages-section">
      <TagList tags={languages} label="List of languages" variant="skills" />
    </Section>
  );
}
