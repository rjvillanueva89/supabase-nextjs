interface Props {
  params: any;
}

const BlogPost = ({ params }: Props) => {
  console.log(params);
  return <h1>{`Blog Post: ${params.slug}`}</h1>;
};

export default BlogPost;
