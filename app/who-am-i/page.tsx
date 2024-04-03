import { ExternalLink } from "@/components/external-link";
import { Button } from "@/components/ui/button";
import { IconArrowRight } from "@/components/ui/icons";
import Image from "next/image";
import Link from "next/link";
import image_jean_monnet from "@/public/img_jean_monnet.jpg";

export default async function WhoAmIPage() {
    return (
        <div className="flex min-h-[calc(100vh-theme(spacing.16))] items-center justify-center py-10 flex-col gap-8">
            <div className="mx-auto max-w-2xl px-4">
                <div className="rounded-lg border bg-background p-8">
                    <h1 className="mb-6 text-lg font-semibold">
                        Who am I?
                    </h1>
                    <Image src={image_jean_monnet} alt="Jean Monnet" width={400} height={400} className="rounded-lg text-center w-full my-4" />
                    <p className="mb-4 leading-normal">
                        <span className="font-semibold text-foreground">I&apos;m Jean Monnet, a French civil servant, diplomat, and administrator.</span>
                    </p>
                    <p className="mb-4 leading-normal text-muted-foreground">
                        I&apos;ve been built by{' '}
                        <ExternalLink href="https://jef.gal/projects/chatmonnet@projects.jef.gal">JEF Galicia and JEF Bordeaux</ExternalLink>
                        .
                    </p>
                    <p className="mb-4 leading-normal text-muted-foreground">
                        I was born in 1888 in Cognac, France. I started my career in the family business of distilling and distributing cognac before venturing into international affairs.
                    </p>
                    <p className="mb-4 leading-normal text-muted-foreground">
                        <span className="font-semibold text-foreground">I was a fervent advocate for European integration.</span> I believed that unity among European nations was crucial for peace and prosperity. My efforts culminated in the creation of the European Coal and Steel Community, a precursor to the European Union.
                    </p>
                    <p className="mb-4 leading-normal text-muted-foreground">
                        <span className="font-semibold text-foreground">I was also a diplomat and financier.</span> I played key roles in coordinating allied resources during both World Wars and in the economic recovery of Europe after World War II.
                    </p>
                    <p className="mb-4 leading-normal text-muted-foreground">
                        <span className="font-semibold text-foreground">My legacy lives on through the European Union.</span> I passed away in 1979, but my vision for a united Europe continues to inspire generations.
                    </p>
                    <Link className="mt-4 flex flex-col items-start space-y-2" href="https://en.wikipedia.org/wiki/Jean_Monnet">
                        <Button
                            variant="link"
                            className="h-auto p-0 text-base text-left"
                        >
                            <IconArrowRight className="mr-2 text-muted-foreground" />
                            Learn more about me
                        </Button>
                    </Link>
                    <Link className="mt-4 flex flex-col items-start space-y-2" href="/?initialMessage=What%20is%20the%20EU%20doing%20to%20protect%20my%20digital%20rights%3F">
                        <Button
                            variant="link"
                            className="h-auto p-0 text-base text-left"
                        >
                            <IconArrowRight className="mr-2 text-muted-foreground" />
                            Tell me about the EU
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    )
}
