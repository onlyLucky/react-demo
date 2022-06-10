/*
 * @Author: fg
 * @Date: 2022-06-10 15:07:21
 * @LastEditors: fg
 * @LastEditTime: 2022-06-10 16:15:00
 * @Description: 列表渲染
 */

function ListLi(props){
  const numbers = [1,2,3,4,5]
  const listItems = numbers.map((number,index)=> <li key={index}>{number}</li>)
  return (
    <ul>
      {listItems}
    </ul>
    
  )
}

function ListBlog(props) {
  const sidebar = (
    <ul>
      {props.posts.map((post) =>
        <li key={post.id}>
          {post.title}
        </li>
      )}
    </ul>
  );
  const content = props.posts.map((post) =>
    <div key={post.id}>
      <h3>{post.title}</h3>
      <p>{post.content}</p>
    </div>
  );
  return (
    <div>
      {sidebar}
      <hr />
      {content}
    </div>
  );
}

export{
  ListLi,
  ListBlog
}