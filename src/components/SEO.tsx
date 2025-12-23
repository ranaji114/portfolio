import { Helmet } from 'react-helmet-async';

interface SEOProps {
    title: string;
    description?: string;
}

export const SEO = ({ title, description }: SEOProps) => {
    const baseTitle = "Ankur Rana | Software Engineer";
    const defaultDescription = "Portfolio of Ankur Rana, a software engineer building reliable software through real projects.";

    return (
        <Helmet>
            <title>{title ? `${title} | Ankur Rana` : baseTitle}</title>
            <meta name="description" content={description || defaultDescription} />
            <meta name="theme-color" content="#0a0a0a" />
        </Helmet>
    );
};
