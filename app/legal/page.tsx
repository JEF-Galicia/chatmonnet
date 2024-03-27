import { ExternalLink } from "@/components/external-link";
import { Button } from "@/components/ui/button";
import { IconArrowRight } from "@/components/ui/icons";
import Link from "next/link";

export default async function WhoAmIPage() {
    return (
        <div className="flex min-h-[calc(100vh-theme(spacing.16))] items-center justify-center py-10 flex-col gap-8">
            <div className="mx-auto max-w-2xl px-4">
                <div className="rounded-lg border bg-background p-8">
                    <h1 className="mb-6 text-lg font-semibold">
                        ChatMonnet Terms of Use
                    </h1>
                    <p className="mb-4 leading-normal text-muted-foreground">
                        <span className="font-semibold text-foreground">ChatMonnet is an experimental conversational agent created by JEF Galicia and JEF Bordeaux to emulate the persona of Jean Monnet.</span> It is not intended to provide factual information or professional advice.
                    </p>
                    <p className="mb-4 leading-normal text-muted-foreground">
                        Use of ChatMonnet is governed by these terms of use. Please read them carefully.
                    </p>
                    <h2 className="mt-6 mb-2 font-semibold">
                        1. Disclaimer of Accuracy
                    </h2>
                    <p className="mb-4 leading-normal text-muted-foreground">
                        The responses provided by ChatMonnet are generated by artificial intelligence systems and are not reviewed for accuracy or truthfulness. <span className="font-semibold text-foreground">ChatMonnet may provide responses that are incomplete, incorrect, offensive, or factually untrue.</span>
                    </p>
                    <p className="mb-4 leading-normal text-muted-foreground">
                        You should not rely on any responses from ChatMonnet as statements of fact or substitute for professional advice. The creators of ChatMonnet provide no guarantee of accuracy or truthfulness for any responses.
                    </p>
                    <h2 className="mt-6 mb-2 font-semibold">
                        2. Fictional Persona
                    </h2>
                    <p className="mb-4 leading-normal text-muted-foreground">
                        ChatMonnet emulates the persona of Jean Monnet. Its responses do not necessarily represent the actual views, opinions, or factual knowledge of Jean Monnet or any living person. Responses may include invented &quot;facts&quot; and opinions that are not grounded in reality.
                    </p>
                    <h2 className="mt-6 mb-2 font-semibold">
                        3. No Professional Advice
                    </h2>
                    <p className="mb-4 leading-normal text-muted-foreground">
                        ChatMonnet is not a professional advisor and cannot provide legal, medical, financial, or other expert advice. Do not rely on any ChatMonnet response for decisions that could impact your finances, health, employment, legal rights, or other important life matters. Consult a qualified professional if you need advice.
                    </p>
                    <h2 className="mt-6 mb-2 font-semibold">
                        4. Experimental Nature
                    </h2>
                    <p className="mb-4 leading-normal text-muted-foreground">
                        ChatMonnet is an ongoing experiment in conversational AI. Its capabilities and limitations are still being explored. Responses may change over time as the system is updated. Bugs, offensive outputs, or other issues are possible.
                    </p>
                    <h2 className="mt-6 mb-2 font-semibold">
                        5. Usage Restrictions
                    </h2>
                    <p className="mb-4 leading-normal text-muted-foreground">
                        You agree not to use ChatMonnet for any unlawful, harmful, dangerous, or inappropriate purpose. Prohibited usage includes criminal activities, fraud, impersonation, copyright infringement, defamation, invasion of privacy, and infringement on rights of third parties.
                    </p>
                    <h2 className="mt-6 mb-2 font-semibold">
                        6. Point of Contact
                    </h2>
                    <p className="mb-4 leading-normal text-muted-foreground">
                        The project lead for ChatMonnet is Aldan Creo. If you have any issues with the chatbot or questions about these terms, please contact the ChatMonnet team at{' '}<ExternalLink href="mailto:chatmonnet@projects.jef.gal">chatmonnet@projects.jef.gal</ExternalLink>. You can also find more information about the project in{' '}<ExternalLink href="https://jef.gal/en/projects/chatmonnet@projects.jef.gal">our website</ExternalLink>.
                    </p>
                    <p className="mb-4 leading-normal text-muted-foreground">
                        By using ChatMonnet, you acknowledge that you have read and agree to these terms of use. You understand the experimental nature of the chatbot and will not rely on its responses as factual, professional advice.
                    </p>
                    <Link className="mt-4 flex flex-col items-start space-y-2" href="/explainability">
                        <Button
                            variant="link"
                            className="h-auto p-0 text-base text-left"
                        >
                            <IconArrowRight className="mr-2 text-muted-foreground" />
                            How we generate responses
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

