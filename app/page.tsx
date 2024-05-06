import { fetchAPI } from '@/lib/fetchAPI';

const GOOD_SERVICE = 'Good Service';

type TubeLineType = {
    id: string,
    lineStatuses: any;
    name: string
};

function TubeLine({ id, lineStatuses, name }: { id: string, lineStatuses: any, name: string }) {
    console.log('lineStatuses ', lineStatuses);
    const hasDisruption = lineStatuses.filter(({ statusSeverityDescription }: { statusSeverityDescription: string }) => statusSeverityDescription !== GOOD_SERVICE);
    return (<li key={id} className={`line line--${id}`}>{name} | {hasDisruption.length > 0 ? hasDisruption[0].statusSeverityDescription : GOOD_SERVICE}</li>);
}

async function TubeLines() {
    const tubeLines = await fetchAPI();
    return (<ul className="sm:columns-2">{tubeLines.map(({ id, lineStatuses, name }: TubeLineType) => (<TubeLine id={id} lineStatuses={lineStatuses} name={name} />))}</ul>)
}

export default async function Home() {
    return (
        <TubeLines />
    );
}
