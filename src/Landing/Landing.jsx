import { Desktop } from '../desktop';
import { Mobile } from '../mobile';

export const Landing = () => {
    if (window.innerWidth < 1110)
        return <Mobile />

    return (
        <Desktop />
    )
}