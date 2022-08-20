import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';

import styles from './App.module.css';
import './global.css';
import { Post } from './components/Post';
import Modal from 'react-modal';
import { useState } from 'react';
import { DeleteCommentModal } from './components/DeleteCommentModal';

Modal.setAppElement('#root');

export const App = () => {

  const posts = [ 
    {
      id: 1,
      author: {
        avatarUrl: 'https://github.com/diego3g.png',
        name: 'Diego Fernandes',
        role: 'CTO @Rocketseat'
      },
      content: [
        {type: 'paragraph', content: 'Fala galeraa 👋'},
        {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'}, 
        {type: 'link', content: 'jane.design/doctorcare'},           
      ],
      publishedAt: new Date('2022-08-18 08:14:00')
    },
    {
      id: 2,
      author: {
        avatarUrl: 'https://github.com/maykbrito.png',
        name: 'Mayk Brito',
        role: 'Educator @Rocketseat'
      },
      content: [
        {type: 'paragraph', content: 'Fala galeraa 👋'},
        {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'}, 
        {type: 'link', content: 'jane.design/doctorcare'},           
      ],
      publishedAt: new Date('2022-08-16 05:14:00')
    }
  ]

  const [isDeleteCommentModalOpen,setIsDeleteCommentModalOpen] = useState(false)

  function handleOpenDeleteCommentModal(){
    setIsDeleteCommentModalOpen(true)
  }

  function handleCloseDeleteCommentModal(){
    setIsDeleteCommentModalOpen(false)
  }

  return (
    <>
      <DeleteCommentModal
        isOpen={isDeleteCommentModalOpen} 
        onRequestClose={handleCloseDeleteCommentModal}
      />
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post 
                key={post.id}
                author = {post.author}
                content = {post.content}
                publishedAt = {post.publishedAt} 
                onOpenDeleteCommentModal={handleOpenDeleteCommentModal}
              />
            )
          })}         
        </main>
      </div>
    </>
  )
}
