using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class sf4_loops : MonoBehaviour {

    public GameObject sphere;
    public float speedX = 0.01f;
    public Color color;
    public int numSpheres = 4;

    private Renderer ren;
    private GameObject[] spheres;

    private void Awake() {
        ren = sphere.GetComponent<Renderer>();
    }

    private void Start() {
        spheres = new GameObject[numSpheres];
        for (int i=0; i<numSpheres; i++) {
            spheres[i] = Instantiate(sphere, new Vector3(0f, i * 1f, 0f), Quaternion.identity);
        }
    }

    private void Update() {
        moveSpheres();
        ren.sharedMaterial.SetColor("_Color", color);
    }

    private void moveSpheres() {
        for (int i = 0; i < spheres.Length; i++) {
            spheres[i].transform.Translate(speedX, 0f, 0f);
            Vector3 screenPos = Camera.main.WorldToScreenPoint(spheres[i].transform.position);
            if (screenPos.x < 0f || screenPos.x > Screen.width) {
                speedX *= -1f;
            }
        }
    }

}
