import ProfileHeader from "@/components/ProfileHeader";
import ProfileSection from "@/components/ProfileSection";
import SkillBadge from "@/components/SkillBadge";
import ContactInfo from "@/components/ContactInfo";
import { profileData } from "@/data/profileData";

const Index = () => {
  return (
    <main className="min-h-screen bg-background py-8 px-4">
      <div className="max-w-xl mx-auto space-y-4">
        <ProfileHeader
          name={profileData.name}
          title={profileData.title}
          imageUrl={profileData.imageUrl}
        />
        <ProfileSection title="About Me" delay={100}>
          <p className="text-sm leading-relaxed">{profileData.about}</p>
        </ProfileSection>
        <ProfileSection title="Skills" delay={200}>
          <div className="flex flex-wrap gap-2">
            {profileData.skills.map((skill, index) => (
              <SkillBadge key={index} skill={skill} />
            ))}
          </div>
        </ProfileSection>
        <ProfileSection title="Educational Experience" delay={300}>
          <div className="space-y-3">
            <div>
              <h3 className="font-semibold text-foreground">{profileData.education.degree}</h3>
              <p className="text-sm text-muted-foreground">{profileData.education.institution}</p>
              <p className="text-xs text-muted-foreground mt-1">{profileData.education.period}</p>
            </div>
            <p className="text-sm">{profileData.education.description}</p>
            <ul className="list-disc list-inside text-sm space-y-1 text-foreground/80">
              {profileData.education.achievements.map((achievement, index) => (
                <li key={index}>{achievement}</li>
              ))}
            </ul>
          </div>
        </ProfileSection>
        <ContactInfo
          email={profileData.contact.email}
          linkedin={profileData.contact.linkedin}
          phone={profileData.contact.phone}
        />
        <footer className="text-center text-xs text-muted-foreground pt-4 pb-8">
          © {new Date().getFullYear()} {profileData.name}
        </footer>
      </div>
    </main>
  );
};

export default Index;
