import React from 'react';
import {Link} from "react-router-dom";
import edit from '../img/edit.png'
import Delete from '../img/delete.png'
const Single = () => {
    return (
        <div className="single">
            <div className="content">
                <img src="https://images.pexels.com/photos/7008010/pexels-photo-7008010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=""/>
                <div className="user">
                    <img src="https://archives.bulbagarden.net/media/upload/thumb/a/a8/Diamond_Pearl_Flint.png/150px-Diamond_Pearl_Flint.png" alt=""/>
                    <div className="info">
                        <span>Tuğran</span>
                        <p>2 gün önce yayınlandı</p>
                    </div>
                    <div className="edit">
                        <Link to={`/write?edit=2`}>
                            <img src={edit} alt=""/>
                        </Link>
                        <img src={Delete } alt=""/>
                    </div>
                </div>
                <h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt doloribus earum fugit iste laboriosam maxime ratione reprehenderit suscipit veniam voluptatibus! Delectus dolor eius est harum, similique sit voluptas. Nisi, vitae!
                </h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis dolores magnam optio voluptatem? Atque consequuntur cupiditate deleniti, deserunt dolores eligendi, expedita in laboriosam maxime molestiae nesciunt nostrum officia quidem repudiandae.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis dolores magnam optio voluptatem? Atque consequuntur cupiditate deleniti, deserunt dolores eligendi, expedita in laboriosam maxime molestiae nesciunt nostrum officia quidem repudiandae.
                   <br/><br/>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis dolores magnam optio voluptatem? Atque consequuntur cupiditate deleniti, deserunt dolores eligendi, expedita in laboriosam maxime molestiae nesciunt nostrum officia quidem repudiandae.
                   <br/><br/>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis dolores magnam optio voluptatem? Atque consequuntur cupiditate deleniti, deserunt dolores eligendi, expedita in laboriosam maxime molestiae nesciunt nostrum officia quidem repudiandae.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis dolores magnam optio voluptatem? Atque consequuntur cupiditate deleniti, deserunt dolores eligendi, expedita in laboriosam maxime molestiae nesciunt nostrum officia quidem repudiandae.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis dolores magnam optio voluptatem? Atque consequuntur cupiditate deleniti, deserunt dolores eligendi, expedita in laboriosam maxime molestiae nesciunt nostrum officia quidem repudiandae.
                   <br/><br/>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis dolores magnam optio voluptatem? Atque consequuntur cupiditate deleniti, deserunt dolores eligendi, expedita in laboriosam maxime molestiae nesciunt nostrum officia quidem repudiandae.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis dolores magnam optio voluptatem? Atque consequuntur cupiditate deleniti, deserunt dolores eligendi, expedita in laboriosam maxime molestiae nesciunt nostrum officia quidem repudiandae.
                   <br/><br/>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis dolores magnam optio voluptatem? Atque consequuntur cupiditate deleniti, deserunt dolores eligendi, expedita in laboriosam maxime molestiae nesciunt nostrum officia quidem repudiandae.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis dolores magnam optio voluptatem? Atque consequuntur cupiditate deleniti, deserunt dolores eligendi, expedita in laboriosam maxime molestiae nesciunt nostrum officia quidem repudiandae.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis dolores magnam optio voluptatem? Atque consequuntur cupiditate deleniti, deserunt dolores eligendi, expedita in laboriosam maxime molestiae nesciunt nostrum officia quidem repudiandae.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis dolores magnam optio voluptatem? Atque consequuntur cupiditate deleniti, deserunt dolores eligendi, expedita in laboriosam maxime molestiae nesciunt nostrum officia quidem repudiandae.
                   <br/><br/>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis dolores magnam optio voluptatem? Atque consequuntur cupiditate deleniti, deserunt dolores eligendi, expedita in laboriosam maxime molestiae nesciunt nostrum officia quidem repudiandae.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis dolores magnam optio voluptatem? Atque consequuntur cupiditate deleniti, deserunt dolores eligendi, expedita in laboriosam maxime molestiae nesciunt nostrum officia quidem repudiandae.
                   <br/><br/>
                </p>
            </div>
            <div className="menu">Menu</div>
        </div>
    )
};

export default Single;