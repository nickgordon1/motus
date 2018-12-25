import Animation from '../../src/animation/Animation';
import { NO_UNIT } from '../../src/enum/specialUnitEnum';
document.body.innerHTML = `<p>test</p>`;
const $element = document.querySelector('p');
$element.style.width = '10px';
$element.style.height = '10px';
$element.style.opacity = 1;

describe('Animation', () => {
  const keyframesArr = [
    {
      width: 100,
      height: {
        to: 20,
      },
    },
    {
      scale: 1.1,

      translate: ['30px', '30px'],
      width: 400,
      opacity: 0.2,
      height: {
        from: 100,
        to: 40,
      },
      // fontSize: 30,
    },
  ];
  const keyframesObj = {
    0: {
      width: {
        from: 10,
        to: 100,
        unit: 'px',
      },
      height: {
        from: 10,
        to: 20,
        unit: 'px',
      },
    },
    100: {
      opacity: {
        from: 1,
        to: 0.2,
        unit: NO_UNIT,
      },
      width: {
        from: 100,
        to: 400,
        unit: 'px',
      },
      height: {
        from: 100,
        to: 40,
        unit: 'px',
      },
      translate: {
        from: [[0, 'px'], [0, 'px']],
        to: [[30, 'px'], [30, 'px']],
        unit: undefined,
      },
      scale: {
        from: 1,
        to: 1.1,
        unit: NO_UNIT,
      },
    },
  };
  it('keyframe normalization', () => {
    const animation = new Animation($element, keyframesArr);
    expect(animation.keyframes).toEqual(keyframesObj);
  });
});
