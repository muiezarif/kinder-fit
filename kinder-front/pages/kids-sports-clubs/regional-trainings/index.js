import {useTranslations} from "next-intl";
import {useRouter} from "next/router";
import RegionalTrainings from "../../../components/kids-sports-club-child-components/RegionalTrainings";
export default function Index() {
    const t = useTranslations("all")
    const {locale} = useRouter();
    return (
        <div>
            <RegionalTrainings translation={t}/>
        </div>
    )
}
export async function getStaticProps({locale}) {
    return {
        props: {
            // You can get the messages from anywhere you like, but the recommended
            // pattern is to put them in JSON files separated by language and read
            // the desired one based on the `locale` received from Next.js.
            messages: require(`../../../lang/${locale}.json`)
        }
    };
}

