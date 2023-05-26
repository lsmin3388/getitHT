let questionClear = [
    {
        qString: "술에서 느껴지는 쓴 맛에 거부감이 없다.",
        qWeight: [
            {
                //매우 아니다
                type: "bitter",
                weight: 20,
            },
            {
                //아니다
                type: "bitter",
                weight: 40,
            },
            {
                //보통
                type: "bitter",
                weight: 60,
            },
            {
                //그렇다
                type: "bitter",
                weight: 80,
            },
            {
                //매우 그렇다
                type: "bitter",
                weight: 100,
            },
        ],
    },

    {
        qString: "생강향을 싫어한다.",
        qWeight: [
            {
                //매우 아니다
                type: "bitter",
                weight: 100,
            },
            {
                //아니다
                type: "bitter",
                weight: 80,
            },
            {
                //보통
                type: "bitter",
                weight: 60,
            },
            {
                //그렇다
                type: "bitter",
                weight: 40,
            },
            {
                //매우 그렇다
                type: "bitter",
                weight: 20,
            },
        ],
    },

    {
        qString: "산뜻한 술보다 깊은 맛을 내는 술이 좋다.",
        qWeight: [
            {
                //매우 아니다
                type: "body-taste",
                weight: 20,
            },
            {
                //아니다
                type: "body-taste",
                weight: 40,
            },
            {
                //보통
                type: "body-taste",
                weight: 60,
            },
            {
                //그렇다
                type: "body-taste",
                weight: 80,
            },
            {
                //매우 그렇다
                type: "body-taste",
                weight: 100,
            },
        ],
    },

    {
        qString: "술은 취하려고 마시는 것이다.",
        qWeight: [
            {
                //매우 아니다
                type: "alcohol",
                weight: 20,
            },
            {
                //아니다
                type: "alcohol",
                weight: 40,
            },
            {
                //보통
                type: "alcohol",
                weight: 60,
            },
            {
                //그렇다
                type: "alcohol",
                weight: 80,
            },
            {
                //매우 그렇다
                type: "alcohol",
                weight: 100,
            },
        ],
    },

    {
        qString: "고량주를 좋아한다.",
        qWeight: [
            {
                //매우 아니다
                type: "alcohol",
                weight: 20,
            },
            {
                //아니다
                type: "alcohol",
                weight: 40,
            },
            {
                //보통
                type: "alcohol",
                weight: 60,
            },
            {
                //그렇다
                type: "alcohol",
                weight: 80,
            },
            {
                //매우 그렇다
                type: "alcohol",
                weight: 100,
            },
        ],
    },

    {
        qString: "사탕이나 초콜릿을 좋아한다.",
        qWeight: [
            {
                //매우 아니다
                type: "sweet",
                weight: 20,
            },
            {
                //아니다
                type: "sweet",
                weight: 40,
            },
            {
                //보통
                type: "sweet",
                weight: 60,
            },
            {
                //그렇다
                type: "sweet",
                weight: 80,
            },
            {
                //매우 그렇다
                type: "sweet",
                weight: 100,
            },
        ],
    },

    {
        qString: "솜사탕을 좋아한다.",
        qWeight: [
            {
                //매우 아니다
                type: "sweet",
                weight: 20,
            },
            {
                //아니다
                type: "sweet",
                weight: 40,
            },
            {
                //보통
                type: "sweet",
                weight: 60,
            },
            {
                //그렇다
                type: "sweet",
                weight: 80,
            },
            {
                //매우 그렇다
                type: "sweet",
                weight: 100,
            },
        ],
    },

    {
        qString: "'아이셔'를 좋아한다.",
        qWeight: [
            {
                //매우 아니다
                type: "sour",
                weight: 20,
            },
            {
                //아니다
                type: "sour",
                weight: 40,
            },
            {
                //보통
                type: "sour",
                weight: 60,
            },
            {
                //그렇다
                type: "sour",
                weight: 80,
            },
            {
                //매우 그렇다
                type: "sour",
                weight: 100,
            },
        ],
    },

    {
        qString: "레몬의 신맛에 거부감이 없다.",
        qWeight: [
            {
                //매우 아니다
                type: "sour",
                weight: 20,
            },
            {
                //아니다
                type: "sour",
                weight: 40,
            },
            {
                //보통
                type: "sour",
                weight: 60,
            },
            {
                //그렇다
                type: "sour",
                weight: 80,
            },
            {
                //매우 그렇다
                type: "sour",
                weight: 100,
            },
        ],
    },

    {
        qString: "요구르트와 같이 끈적한 식감을 좋아한다.",
        qWeight: [
            {
                //매우 아니다
                type: "body-taste",
                weight: 20,
            },
            {
                //아니다
                type: "body-taste",
                weight: 40,
            },
            {
                //보통
                type: "body-taste",
                weight: 60,
            },
            {
                //그렇다
                type: "body-taste",
                weight: 80,
            },
            {
                //매우 그렇다
                type: "body-taste",
                weight: 100,
            },
        ],
    },

    {
        qString: "점도가 높은 음식에 거부감이 없다.",
        qWeight: [
            {
                //매우 아니다
                type: "body-taste",
                weight: 20,
            },
            {
                //아니다
                type: "body-taste",
                weight: 40,
            },
            {
                //보통
                type: "body-taste",
                weight: 60,
            },
            {
                //그렇다
                type: "body-taste",
                weight: 80,
            },
            {
                //매우 그렇다
                type: "body-taste",
                weight: 100,
            },
        ],
    },

    {
        qString: "고소한 것보단 상큼한 것이 좋다.",
        qWeight: [
            {
                //매우 아니다
                type: "sour",
                weight: 20,
            },
            {
                //아니다
                type: "sour",
                weight: 40,
            },
            {
                //보통
                type: "sour",
                weight: 60,
            },
            {
                //그렇다
                type: "sour",
                weight: 80,
            },
            {
                //매우 그렇다
                type: "sour",
                weight: 100,
            },
        ],
    },

    {
        qString: "군것질을 즐긴다.",
        qWeight: [
            {
                //매우 아니다
                type: "sweet",
                weight: 20,
            },
            {
                //아니다
                type: "sweet",
                weight: 40,
            },
            {
                //보통
                type: "sweet",
                weight: 60,
            },
            {
                //그렇다
                type: "sweet",
                weight: 80,
            },
            {
                //매우 그렇다
                type: "sweet",
                weight: 100,
            },
        ],
    },

    {
        qString: "단 맛을 좋아한다.",
        qWeight: [
            {
                //매우 아니다
                type: "sweet",
                weight: 20,
            },
            {
                //아니다
                type: "sweet",
                weight: 40,
            },
            {
                //보통
                type: "sweet",
                weight: 60,
            },
            {
                //그렇다
                type: "sweet",
                weight: 80,
            },
            {
                //매우 그렇다
                type: "sweet",
                weight: 100,
            },
        ],
    },

    {
        qString: "도수가 높은 술에 거부감이 없다.",
        qWeight: [
            {
                //매우 아니다
                type: "alcohol",
                weight: 20,
            },
            {
                //아니다
                type: "alcohol",
                weight: 40,
            },
            {
                //보통
                type: "alcohol",
                weight: 60,
            },
            {
                //그렇다
                type: "alcohol",
                weight: 80,
            },
            {
                //매우 그렇다
                type: "alcohol",
                weight: 100,
            },
        ],
    },

    {
        qString: "도라지 차를 마시는 데에 거부감이 없다.",
        qWeight: [
            {
                //매우 아니다
                type: "bitter",
                weight: 20,
            },
            {
                //아니다
                type: "bitter",
                weight: 40,
            },
            {
                //보통
                type: "bitter",
                weight: 60,
            },
            {
                //그렇다
                type: "bitter",
                weight: 80,
            },
            {
                //매우 그렇다
                type: "bitter",
                weight: 100,
            },
        ],
    },

    {
        qString: "쓴 맛을 싫어한다.",
        qWeight: [
            {
                //매우 아니다
                type: "bitter",
                weight: 100,
            },
            {
                //아니다
                type: "bitter",
                weight: 80,
            },
            {
                //보통
                type: "bitter",
                weight: 60,
            },
            {
                //그렇다
                type: "bitter",
                weight: 40,
            },
            {
                //매우 그렇다
                type: "bitter",
                weight: 20,
            },
        ],
    },

    {
        qString: "아메리카노를 종종 마신다.",
        qWeight: [
            {
                //매우 아니다
                type: "sour",
                weight: 20,
            },
            {
                //아니다
                type: "sour",
                weight: 40,
            },
            {
                //보통
                type: "sour",
                weight: 60,
            },
            {
                //그렇다
                type: "sour",
                weight: 80,
            },
            {
                //매우 그렇다
                type: "sour",
                weight: 100,
            },
        ],
    },

    {
        qString: "술을 마실 때 바디감이 중요하다.",
        qWeight: [
            {
                //매우 아니다
                type: "body-taste",
                weight: 20,
            },
            {
                //아니다
                type: "body-taste",
                weight: 40,
            },
            {
                //보통
                type: "body-taste",
                weight: 60,
            },
            {
                //그렇다
                type: "body-taste",
                weight: 80,
            },
            {
                //매우 그렇다
                type: "body-taste",
                weight: 100,
            },
        ],
    },

    {
        qString: "술을 마실 때 속이 타는 듯한 기분이 좋다.",
        qWeight: [
            {
                //매우 아니다
                type: "alcohol",
                weight: 20,
            },
            {
                //아니다
                type: "alcohol",
                weight: 40,
            },
            {
                //보통
                type: "alcohol",
                weight: 60,
            },
            {
                //그렇다
                type: "alcohol",
                weight: 80,
            },
            {
                //매우 그렇다
                type: "alcohol",
                weight: 100,
            },
        ],
    },
];

export default questionClear;
