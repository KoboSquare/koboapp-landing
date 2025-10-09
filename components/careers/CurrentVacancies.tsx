import { client } from "@/lib/sanity/client";
import { OPEN_POSITIONS_QUERY } from "@/lib/sanity/queries/careers";
import CurrentVacancy, { ICurrentVacancy } from "./CurrentVacancy";
interface OpenPositionsSection {
  title: string;
  subtitle: string;
  showSection: boolean;
}

interface CareersPageData {
  openPositionsSection: OpenPositionsSection;
}

interface CurrentVacanciesProps {
  careersPageData: CareersPageData;
}

async function CurrentVacancies({ careersPageData }: CurrentVacanciesProps) {
  const { openPositionsSection } = careersPageData;

  // Fetch job positions from Sanity
  const jobPositions = await client.fetch(OPEN_POSITIONS_QUERY);

  // Transform job positions to match the component's expected format
  const currentVacanciesList: ICurrentVacancy[] = jobPositions.map(
    (position: any) => ({
      title: position.title,
      location: position.location,
      description: position.description,
      date: new Date(position.publishedAt).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      }),
      _id: position._id,
      department: position.department,
      employmentType: position.employmentType,
      experienceLevel: position.experienceLevel,
      applicationUrl: position.applicationUrl,
      applicationEmail: position.applicationEmail,
      salaryRange: position.salaryRange,
    })
  );

  if (!openPositionsSection.showSection) {
    return null;
  }
  return (
    <div className=' bg-[#F9FCFC] py-6 md:py-16 lg:py-24'>
      <div className='max-w-6xl mx-auto'>
        <div className='mb-8'>
          <h6 className='text-[#009A74]'>
            {openPositionsSection.title || "Our current vacancies"}
          </h6>
          {openPositionsSection.subtitle && (
            <p className='text-[#363E3F] mt-2'>
              {openPositionsSection.subtitle}
            </p>
          )}
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6'>
          {currentVacanciesList.length > 0 ? (
            currentVacanciesList.map((item: ICurrentVacancy) => (
              <CurrentVacancy key={item._id} item={item} />
            ))
          ) : (
            <div className='col-span-full text-center py-12'>
              <p className='text-gray-500 text-lg'>
                No open positions available at the moment.
              </p>
              <p className='text-gray-400 mt-2'>
                Check back later for new opportunities!
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default CurrentVacancies;
