"use client";
import Image from "next/image";
import { CalendarMark } from "solar-icon-set/time";
import { MapPointWave } from "solar-icon-set/maplocation";
import { MoneyBag } from "solar-icon-set/money";
import { LinkCircle } from "solar-icon-set/textformatting";
import { StarCircle } from "solar-icon-set/astronomy";

export const PageCourse = ({ singleCourse }) => {
  const formatDate = (date) => {
    const d = new Date(date);
    const year = d.getFullYear();
    const month = String(d.getMonth() + 1).padStart(2, "0"); // Months are zero-based, so add 1
    const day = String(d.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  const startDate = formatDate(singleCourse.startDate);
  const endDate = formatDate(singleCourse.endDate);

  console.log(singleCourse);
  return (
    //header
    <main className="m-9">
      {/* image, category, title, nama user */}
      <div className="grid grid-cols-2 gap-5">
        <div className="col-span-1 bg-slate-300 h-80">
          {/* <Image
            alt="course image"
            src={`${process.env.R2_PUBLIC_URL}/courseconnect/${singleCourse.id}/${singleCourse.image}`}
            width={600}
            height={400}
          /> */}
        </div>
        <div className="col-span-1">
          <h4 className="font-semibold text-primary">
            {singleCourse.category.name}
          </h4>
          <h1 className="font-medium text-5xl">{singleCourse.title}</h1>
          <h3>{singleCourse.user.fullName}</h3>
        </div>
      </div>

      {/* description */}
      <div className="py-6">
        <h3>{singleCourse.description}</h3>
      </div>

      {/* detail info */}
      <div className="space-y-2">
        <h3 className="font-bold">Detail Information</h3>
        <div className="space-y-2">
          <div className="flex gap-4">
            <CalendarMark size={28} />
            <h3>
              {startDate} until {endDate}
            </h3>
          </div>
          <div className="flex gap-4">
            <MapPointWave size={28} />
            <h3>{singleCourse.location}</h3>
          </div>
          <div className="flex gap-4">
            <MoneyBag size={28} />
            <h3>{singleCourse.price}</h3>
          </div>
          <div className="flex gap-4">
            <LinkCircle size={28} />
            <h3>{singleCourse.linkPlatform}</h3>
          </div>
        </div>
      </div>

      {/* container feedback */}
      <div>
        <div className="flex">
          <StarCircle size={36} />
          <h2 className="font-bold text-xl">Rating</h2>
          <button className="btn btn-wide btn-primary">add feedback</button>
        </div>

        <div className="bg-neutral">
          <div>
            <img src="" alt="" />
            image user
            <h3>nama user</h3>
            <h3>rating</h3>
          </div>
          <div>
            <h4>komentar feedback</h4>
            <img src="" alt="" />
          </div>
        </div>
      </div>
    </main>
    //footer
  );
};
