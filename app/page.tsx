import { fetchAPI } from '@/lib/fetchAPI';

// const GOOD_SERVICE = 'Good Service';

type LineStatus = {
    $type: string;
    id: number;
    statusSeverity: number;
    statusSeverityDescription: string;
    created: string;
    validityPeriods: ValidityPeriods[];
};

type TubeLineType = {
    id: string;
    lineStatuses: LineStatus[];
    name: string;
};

type TubeLineNameType = {
    id: string;
    name: string;
};

type TubeLineStatusType = {
    lineStatuses: LineStatus[];
};

type ValidityPeriods = {
    $type: string;
    category: string;
    categoryDescription: string;
    description: string;
    created: string;
    affectedRoutes: string[];
    affectedStops: string[];
    closureText: string;
};

function TubeLineName({ id, name }: TubeLineNameType) {
    return (<div className={`w-2/3 line line--${id}`}>
        <dt className="sr-only" aria-hidden="true">Name</dt>
        <dd id={`title--${id}`}>{name}</dd>
    </div>);
}

function TubeLineStatus({lineStatuses}: TubeLineStatusType) {
    return (<div className="w-1/3">
        <dt className="sr-only" aria-hidden="true">Status</dt>
        {lineStatuses.map(({statusSeverityDescription}) => <dd>{statusSeverityDescription}</dd>)}
    </div>);
}

function TubeLine({id, lineStatuses, name }: TubeLineType) {
    return (
        <dl key={id} className={`border border-gray-300 border-t-0 p-2.5 pl-5 flex justify-between relative sm:columns-2 gap-x-0 break-inside-avoid-column`} role="heading">
            <TubeLineName id={id} name={name} />
            <TubeLineStatus lineStatuses={lineStatuses} />
        </dl>
    );
}

async function TubeLines() {
    const tubeLines = await fetchAPI();
    return (<section className="sm:columns-2 gap-x-0">
        {tubeLines.map(({ id, lineStatuses, name }: TubeLineType) => (
            <TubeLine id={id} lineStatuses={lineStatuses} name={name} />
        ))}
    </section>)
}

export default async function Home() {
    return (
        <TubeLines />
    );
}
