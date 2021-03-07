export const particles = {
    "background": {
        "image": "",
        "position": "50% 50%",
        "repeat": "no-repeat",
        "size": "cover",
        "opacity": 1
    },
    "backgroundMask": {
        "cover": {
            "color": {
                "value": "#fff"
            },
            "opacity": 1
        },
        "enable": false
    },
    "detectRetina": true,
    "fpsLimit": 60,
    "infection": {
        "cure": false,
        "delay": 0,
        "enable": false,
        "infections": 0,
        "stages": []
    },
    "interactivity": {
        "detectsOn": "window",
        "events": {
            "onClick": {
                "enable": true,
                "mode": "push"
            },
            "onHover": {
                "enable": true,
                "mode": "grab"
            },
            "resize": true
        },
        "modes": {
            "grab": {
                "distance": 150,
                "line_linked": {
                    "opacity": 1
                }
            },
            "bubble": {
                "distance": 400,
                "size": 40,
                "duration": 2,
                "opacity": 8,
                "speed": 3
            },
            "repulse": {
                "distance": 200,
                "duration": 0.4
            },
            "push": {
                "particles_nb": 4
            },
            "remove": {
                "particles_nb": 2
            }
        }
    },
    "particles": {
        "collisions": {
            "enable": false,
            "mode": "bounce"
        },
        "color": {
            "value": "#ffffff",
            "animation": {
                "enable": true,
                "speed": 20,
                "sync": true
            }
        },
        "links": {
            "blink": false,
            "color": {
                "value": "#ffffff"
            },
            "consent": false,
            "distance": 150,
            "enable": true,
            "opacity": 0.4,
            "shadow": {
                "blur": 5,
                "color": {
                    "value": "#00ff00"
                },
                "enable": false
            },
            "triangles": {
                "enable": false
            },
            "width": 1,
            "warp": false
        },
        "move": {
            "enable": true,
            "speed": 2,
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "bounce": true,
            "attract": {
                "enable": false,
                "rotateX": 600,
                "rotateY": 1200
            }
        },
        "number": {
            "density": {
                "enable": true,
                "area": 800,
                "factor": 1000
            },
            "limit": 0,
            "value": 100
        },
        "opacity": {
            "animation": {
                "enable": false,
                "minimumValue": 0.1,
                "speed": 3,
                "sync": false
            },
            "random": {
                "enable": false,
                "minimumValue": 1
            },
            "value": 0.5
        },
        "rotate": {
            "animation": {
                "enable": false,
                "speed": 0,
                "sync": false
            },
            "direction": "clockwise",
            "path": false,
            "random": false,
            "value": 0
        },
        "shadow": {
            "blur": 0,
            "color": {
                "value": "#000000"
            },
            "enable": false,
            "offset": {
                "x": 0,
                "y": 0
            }
        },
        "shape": {
            "type": "circle",
            "stroke": {
                "width": 3,
                "color": "#000000"
            },
            "polygon": {
                "nb_sides": 5
            },
            "image": {
                "src": "https://cdn.matteobruni.it/images/particles/github.svg",
                "width": 100,
                "height": 100
            }
        },
        "size": {
            "animation": {
                "enable": false,
                "speed": 40,
                "size_min": 0.1,
                "sync": false
            },
            "random": {
                "enable": true,
                "minimumValue": 1
            },
            "value": 4
        }
    },
    "retina_detect": true
};

export default particles;