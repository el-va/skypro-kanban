import Card from "./Card/Card"

const tasks = [
    {
        id: 0,
        title: "Название задачи",
        date: "30.10.2023",
        theme: "orange",
        description: "Web Design",
    },
    {
        id: 1,
        title: "Название задачи",
        date: "30.10.2023",
        theme: "green",
        description: "Research",
    },
    {
        id: 2,
        title: "Название задачи",
        date: "30.10.2023",
        theme: "purple",
        description: "Copywriting",
    },
]

export default function Container() {
    return (
        <div className="container">
    
        <div className="main__block">
          <div className="main__content">
            <div className="main__column column">
              <div className="column__title">
                <p>Без статуса</p>
              </div>
              <div className="cards">
                <div>
                    {tasks.map((task) => {
                        <Card
                        id={task.id}
                        title={task.title}
                        date={task.date}
                        theme={task.theme}
                        description={task.description}
                        />
                    })}
                </div>
                <div className="cards__item">
                  <div className="cards__card card">
                    <div className="card__group">
                      <div className="card__theme _orange">
                        <p className="_orange">Web Design</p>
                      </div>
                      <a href="#popBrowse" target="_self">
                        <div className="card__btn">
                          <div></div>
                          <div></div>
                          <div></div>
                        </div>
                      </a>
                    </div>
                    <div className="card__content">
                      <a href="" target="_blank">
                        <h3 className="card__title">Название задачи</h3>
                      </a>
                      <div className="card__date">
                        <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none">
                          <g clipPath="url(#clip0_1_415)">
                            <path d="M10.5625 2.03125H2.4375C1.7644 2.03125 1.21875 2.5769 1.21875 3.25V10.5625C1.21875 11.2356 1.7644 11.7812 2.4375 11.7812H10.5625C11.2356 11.7812 11.7812 11.2356 11.7812 10.5625V3.25C11.7812 2.5769 11.2356 2.03125 10.5625 2.03125Z" stroke="#94A6BE" strokeWidth="0.8" strokeLinejoin="round" />
                            <path d="M11.7812 4.0625H1.21875M3.25 1.21875V2.03125V1.21875ZM9.75 1.21875V2.03125V1.21875Z" stroke="#94A6BE" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round" />
                          </g>
                          <defs>
                            <clipPath id="clip0_1_415">
                              <rect width="13" height="13" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                        <p>30.10.23</p>
                      </div>
                    </div>
                  </div>
                </div>
              
                <div className="cards__item">
                  <div className="cards__card card">
                    <div className="card__group">
                      <div className="card__theme _green">
                        <p className="_green">Research</p>
                      </div>
                      <a href="#popBrowse" target="_self">
                        <div className="card__btn">
                          <div></div>
                          <div></div>
                          <div></div>
                        </div>
                      </a>
                    </div>
                    <div className="card__content">
                      <a href="" target="_blank">
                        <h3 className="card__title">Название задачи</h3>
                      </a>
                      <div className="card__date">
                        <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none">
                          <g clipPath="url(#clip0_1_415)">
                            <path d="M10.5625 2.03125H2.4375C1.7644 2.03125 1.21875 2.5769 1.21875 3.25V10.5625C1.21875 11.2356 1.7644 11.7812 2.4375 11.7812H10.5625C11.2356 11.7812 11.7812 11.2356 11.7812 10.5625V3.25C11.7812 2.5769 11.2356 2.03125 10.5625 2.03125Z" stroke="#94A6BE" strokeWidth="0.8" strokeLinejoin="round" />
                            <path d="M11.7812 4.0625H1.21875M3.25 1.21875V2.03125V1.21875ZM9.75 1.21875V2.03125V1.21875Z" stroke="#94A6BE" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round" />
                          </g>
                          <defs>
                            <clipPath id="clip0_1_415">
                              <rect width="13" height="13" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                        <p>30.10.23</p>
                      </div>
                    </div>
                  </div>
                </div>
              
                <div className="cards__item">
                  <div className="cards__card card">
                    <div className="card__group">
                      <div className="card__theme _orange">
                        <p className="_orange">Web Design</p>
                      </div>
                      <a href="#popBrowse" target="_self">
                        <div className="card__btn">
                          <div></div>
                          <div></div>
                          <div></div>
                        </div>
                      </a>
                    </div>
                    <div className="card__content">
                      <a href="" target="_blank">
                        <h3 className="card__title">Название задачи</h3>
                      </a>
                      <div className="card__date">
                        <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none">
                          <g clipPath="url(#clip0_1_415)">
                            <path d="M10.5625 2.03125H2.4375C1.7644 2.03125 1.21875 2.5769 1.21875 3.25V10.5625C1.21875 11.2356 1.7644 11.7812 2.4375 11.7812H10.5625C11.2356 11.7812 11.7812 11.2356 11.7812 10.5625V3.25C11.7812 2.5769 11.2356 2.03125 10.5625 2.03125Z" stroke="#94A6BE" strokeWidth="0.8" strokeLinejoin="round" />
                            <path d="M11.7812 4.0625H1.21875M3.25 1.21875V2.03125V1.21875ZM9.75 1.21875V2.03125V1.21875Z" stroke="#94A6BE" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round" />
                          </g>
                          <defs>
                            <clipPath id="clip0_1_415">
                              <rect width="13" height="13" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                        <p>30.10.23</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="cards__item">
                  <div className="cards__card card">
                    <div className="card__group">
                      <div className="card__theme _purple">
                        <p className="_purple">Copywriting</p>
                      </div>
                      <a href="#popBrowse" target="_self">
                        <div className="card__btn">
                          <div></div>
                          <div></div>
                          <div></div>
                        </div>
                      </a>
                    </div>
                    <div className="card__content">
                      <a href="" target="_blank">
                        <h3 className="card__title">Название задачи</h3>
                      </a>
                      <div className="card__date">
                        <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none">
                          <g clipPath="url(#clip0_1_415)">
                            <path d="M10.5625 2.03125H2.4375C1.7644 2.03125 1.21875 2.5769 1.21875 3.25V10.5625C1.21875 11.2356 1.7644 11.7812 2.4375 11.7812H10.5625C11.2356 11.7812 11.7812 11.2356 11.7812 10.5625V3.25C11.7812 2.5769 11.2356 2.03125 10.5625 2.03125Z" stroke="#94A6BE" strokeWidth="0.8" strokeLinejoin="round" />
                            <path d="M11.7812 4.0625H1.21875M3.25 1.21875V2.03125V1.21875ZM9.75 1.21875V2.03125V1.21875Z" stroke="#94A6BE" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round" />
                          </g>
                          <defs>
                            <clipPath id="clip0_1_415">
                              <rect width="13" height="13" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                        <p>30.10.23</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="cards__item">
                  <div className="cards__card card">
                    <div className="card__group">
                      <div className="card__theme _orange">
                        <p className="_orange">Web Design</p>
                      </div>
                      <a href="#popBrowse" target="_self">
                        <div className="card__btn">
                          <div></div>
                          <div></div>
                          <div></div>
                        </div>
                      </a>
                    </div>
                    <div className="card__content">
                      <a href="" target="_blank">
                        <h3 className="card__title">Название задачи</h3>
                      </a>
                      <div className="card__date">
                        <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none">
                          <g clipPath="url(#clip0_1_415)">
                            <path d="M10.5625 2.03125H2.4375C1.7644 2.03125 1.21875 2.5769 1.21875 3.25V10.5625C1.21875 11.2356 1.7644 11.7812 2.4375 11.7812H10.5625C11.2356 11.7812 11.7812 11.2356 11.7812 10.5625V3.25C11.7812 2.5769 11.2356 2.03125 10.5625 2.03125Z" stroke="#94A6BE" strokeWidth="0.8" strokeLinejoin="round" />
                            <path d="M11.7812 4.0625H1.21875M3.25 1.21875V2.03125V1.21875ZM9.75 1.21875V2.03125V1.21875Z" stroke="#94A6BE" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round" />
                          </g>
                          <defs>
                            <clipPath id="clip0_1_415">
                              <rect width="13" height="13" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                        <p>30.10.23</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>						
            <div className="main__column">
              <div className="column__title">
                <p>Нужно сделать</p>
              </div>
              <div className="cards">
                <div className="cards__item">
                  <div className="cards__card card">
                    <div className="card__group">
                      <div className="card__theme _green">
                        <p className="_green">Research</p>
                      </div>
                      <a href="#popBrowse" target="_self">
                        <div className="card__btn">
                          <div></div>
                          <div></div>
                          <div></div>
                        </div>
                      </a>
                    </div>
                    <div className="card__content">
                      <a href="" target="_blank">
                        <h3 className="card__title">Название задачи</h3>
                      </a>
                      <div className="card__date">
                        <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none">
                          <g clipPath="url(#clip0_1_415)">
                            <path d="M10.5625 2.03125H2.4375C1.7644 2.03125 1.21875 2.5769 1.21875 3.25V10.5625C1.21875 11.2356 1.7644 11.7812 2.4375 11.7812H10.5625C11.2356 11.7812 11.7812 11.2356 11.7812 10.5625V3.25C11.7812 2.5769 11.2356 2.03125 10.5625 2.03125Z" stroke="#94A6BE" strokeWidth="0.8" strokeLinejoin="round" />
                            <path d="M11.7812 4.0625H1.21875M3.25 1.21875V2.03125V1.21875ZM9.75 1.21875V2.03125V1.21875Z" stroke="#94A6BE" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round" />
                          </g>
                          <defs>
                            <clipPath id="clip0_1_415">
                              <rect width="13" height="13" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                        <p>30.10.23</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="main__column">
              <div className="column__title">
                <p>В работе</p>
              </div>
              <div className="cards">
                <div className="cards__item">
                  <div className="cards__card card">
                    <div className="card__group">
                      <div className="card__theme _green">
                        <p className="_green">Research</p>
                      </div>
                      <a href="#popBrowse" target="_self">
                        <div className="card__btn">
                          <div></div>
                          <div></div>
                          <div></div>
                        </div>
                      </a>
                    </div>
                    <div className="card__content">
                      <a href="" target="_blank">
                        <h3 className="card__title">Название задачи</h3>
                      </a>
                      <div className="card__date">
                        <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none">
                          <g clipPath="url(#clip0_1_415)">
                            <path d="M10.5625 2.03125H2.4375C1.7644 2.03125 1.21875 2.5769 1.21875 3.25V10.5625C1.21875 11.2356 1.7644 11.7812 2.4375 11.7812H10.5625C11.2356 11.7812 11.7812 11.2356 11.7812 10.5625V3.25C11.7812 2.5769 11.2356 2.03125 10.5625 2.03125Z" stroke="#94A6BE" strokeWidth="0.8" strokeLinejoin="round" />
                            <path d="M11.7812 4.0625H1.21875M3.25 1.21875V2.03125V1.21875ZM9.75 1.21875V2.03125V1.21875Z" stroke="#94A6BE" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round" />
                          </g>
                          <defs>
                            <clipPath id="clip0_1_415">
                              <rect width="13" height="13" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                        <p>30.10.23</p>
                      </div>
                    </div>
                  </div>
                </div>
            
                <div className="cards__item">
                  <div className="cards__card card">
                    <div className="card__group">
                      <div className="card__theme _purple">
                        <p className="_purple">Copywriting</p>
                      </div>
                      <a href="#popBrowse" target="_self">
                        <div className="card__btn">
                          <div></div>
                          <div></div>
                          <div></div>
                        </div>
                      </a>
                    </div>
                    <div className="card__content">
                      <a href="" target="_blank">
                        <h3 className="card__title">Название задачи</h3>
                      </a>
                      <div className="card__date">
                        <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none">
                          <g clipPath="url(#clip0_1_415)">
                            <path d="M10.5625 2.03125H2.4375C1.7644 2.03125 1.21875 2.5769 1.21875 3.25V10.5625C1.21875 11.2356 1.7644 11.7812 2.4375 11.7812H10.5625C11.2356 11.7812 11.7812 11.2356 11.7812 10.5625V3.25C11.7812 2.5769 11.2356 2.03125 10.5625 2.03125Z" stroke="#94A6BE" strokeWidth="0.8" strokeLinejoin="round" />
                            <path d="M11.7812 4.0625H1.21875M3.25 1.21875V2.03125V1.21875ZM9.75 1.21875V2.03125V1.21875Z" stroke="#94A6BE" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round" />
                          </g>
                          <defs>
                            <clipPath id="clip0_1_415">
                              <rect width="13" height="13" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                        <p>30.10.23</p>
                      </div>
                    </div>
                  </div>
                </div>
            
                <div className="cards__item">
                  <div className="cards__card card">
                    <div className="card__group">
                      <div className="card__theme _orange">
                        <p className="_orange">Web Design</p>
                      </div>
                      <a href="#popBrowse" target="_self">
                        <div className="card__btn">
                          <div></div>
                          <div></div>
                          <div></div>
                        </div>
                      </a>
                    </div>
                    <div className="card__content">
                      <a href="" target="_blank">
                        <h3 className="card__title">Название задачи</h3>
                      </a>
                      <div className="card__date">
                        <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none">
                          <g clipPath="url(#clip0_1_415)">
                            <path d="M10.5625 2.03125H2.4375C1.7644 2.03125 1.21875 2.5769 1.21875 3.25V10.5625C1.21875 11.2356 1.7644 11.7812 2.4375 11.7812H10.5625C11.2356 11.7812 11.7812 11.2356 11.7812 10.5625V3.25C11.7812 2.5769 11.2356 2.03125 10.5625 2.03125Z" stroke="#94A6BE" strokeWidth="0.8" strokeLinejoin="round" />
                            <path d="M11.7812 4.0625H1.21875M3.25 1.21875V2.03125V1.21875ZM9.75 1.21875V2.03125V1.21875Z" stroke="#94A6BE" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round" />
                          </g>
                          <defs>
                            <clipPath id="clip0_1_415">
                              <rect width="13" height="13" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                        <p>30.10.23</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="main__column">
              <div className="column__title">
                <p>Тестирование</p>
              </div>
              <div className="cards">
                <div className="cards__item">
                  <div className="cards__card card">
                    <div className="card__group">
                      <div className="card__theme _green">
                        <p className="_green">Research</p>
                      </div>
                      <a href="#popBrowse" target="_self">
                        <div className="card__btn">
                          <div></div>
                          <div></div>
                          <div></div>
                        </div>
                      </a>
                    </div>
                    <div className="card__content">
                      <a href="" target="_blank">
                        <h3 className="card__title">Название задачи</h3>
                      </a>
                      <div className="card__date">
                        <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none">
                          <g clipPath="url(#clip0_1_415)">
                            <path d="M10.5625 2.03125H2.4375C1.7644 2.03125 1.21875 2.5769 1.21875 3.25V10.5625C1.21875 11.2356 1.7644 11.7812 2.4375 11.7812H10.5625C11.2356 11.7812 11.7812 11.2356 11.7812 10.5625V3.25C11.7812 2.5769 11.2356 2.03125 10.5625 2.03125Z" stroke="#94A6BE" strokeWidth="0.8" strokeLinejoin="round" />
                            <path d="M11.7812 4.0625H1.21875M3.25 1.21875V2.03125V1.21875ZM9.75 1.21875V2.03125V1.21875Z" stroke="#94A6BE" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round" />
                          </g>
                          <defs>
                            <clipPath id="clip0_1_415">
                              <rect width="13" height="13" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                        <p>30.10.23</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="main__column">
              <div className="column__title">
                <p>Готово</p>
              </div>
              <div className="cards">
                <div className="cards__item">
                  <div className="cards__card card">
                    <div className="card__group">
                      <div className="card__theme _green">
                        <p className="_green">Research</p>
                      </div>
                      <a href="#popBrowse" target="_self">
                        <div className="card__btn">
                          <div></div>
                          <div></div>
                          <div></div>
                        </div>
                      </a>
                    </div>
                    <div className="card__content">
                      <a href="" target="_blank">
                        <h3 className="card__title">Название задачи</h3>
                      </a>
                      <div className="card__date">
                        <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none">
                          <g clipPath="url(#clip0_1_415)">
                            <path d="M10.5625 2.03125H2.4375C1.7644 2.03125 1.21875 2.5769 1.21875 3.25V10.5625C1.21875 11.2356 1.7644 11.7812 2.4375 11.7812H10.5625C11.2356 11.7812 11.7812 11.2356 11.7812 10.5625V3.25C11.7812 2.5769 11.2356 2.03125 10.5625 2.03125Z" stroke="#94A6BE" strokeWidth="0.8" strokeLinejoin="round" />
                            <path d="M11.7812 4.0625H1.21875M3.25 1.21875V2.03125V1.21875ZM9.75 1.21875V2.03125V1.21875Z" stroke="#94A6BE" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round" />
                          </g>
                          <defs>
                            <clipPath id="clip0_1_415">
                              <rect width="13" height="13" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                        <p>30.10.23</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        
            
          </div>
        
        </div>
      </div>
    )
}