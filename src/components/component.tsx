import React, { useEffect, useState } from 'react';

interface IEatState {
  flavor: string[];
  numberOfServings: string[];
  bonus: string[];
  weight: number[];
}

const FuaGra = (): JSX.Element => {
  const [eatState, setEatState] = useState<IEatState>();

  useEffect(() => {
    fetch('../contentData/content.json')
      .then(res => res.json())
      .then((res: IEatState) => {
        setEatState({
          flavor: res['flavor'],
          numberOfServings: res['numberOfServings'],
          bonus: res['bonus'],
          weight: res['weight'],
        });
      },
      err => {
        // eslint-disable-next-line no-console
        console.log(err);
      });
  }, []);

  return (
    <React.Fragment>
      {
        eatState?.flavor.map((el, index) => (
          <div>
            <span>Сказочное заморское явство</span>
            <h1>Нямушка</h1>
            <span>{el}</span>
            <span>{eatState?.numberOfServings[index]}</span>
            <span>{eatState?.bonus[index]}</span>
            <img src="" alt="Cat" />
          </div>
        ))
      }
    </React.Fragment>
  );
};

export default FuaGra;
