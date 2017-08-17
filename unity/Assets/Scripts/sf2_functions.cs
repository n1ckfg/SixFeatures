using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class sf2_functions : MonoBehaviour {

    public GameObject sphere;
    public float speedX = 0.01f;
    public Color color;

    private Renderer ren;

    private void Awake() {
        ren = sphere.GetComponent<Renderer>();
    }

    private void Update() {
        moveSphere();
        ren.material.SetColor("_Color", color);
    }

    private void moveSphere() {
        sphere.transform.Translate(speedX, 0f, 0f);
    }

}
