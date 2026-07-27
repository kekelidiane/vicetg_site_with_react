import Image from "next/image";
import { Card } from "@/components/ui/card";
import { donationChannels } from "@/lib/site";

function DonationChannels() {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-10">
      {donationChannels.map((channel) => (
        <Card
          key={channel.name}
          className="mx-auto w-full max-w-xs border border-border p-4 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md"
        >
          <a
            href={channel.href}
            {...(channel.href.endsWith(".pdf")
              ? { target: "_blank", rel: "noopener noreferrer" }
              : {})}
            className="flex flex-col items-center gap-3 text-center"
          >
            <Image
              src={channel.image}
              alt={channel.name}
              width={80}
              height={80}
              className="size-20 object-contain"
            />
            <span className="text-xl font-bold text-primary">{channel.detail}</span>
            <p className="text-sm text-muted-foreground">{channel.note}</p>
          </a>
        </Card>
      ))}
    </div>
  );
}

export { DonationChannels };
