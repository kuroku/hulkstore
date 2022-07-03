import "./article.scss";

export interface ArticleProps {
  id: string;
  children: React.ReactElement | React.ReactElement[];
}

export default function Article(props: ArticleProps) {
  const { children, id } = props;
  return (
    <article id={id} className='bg-surface card'>
      {children}
    </article>
  );
}
