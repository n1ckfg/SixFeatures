using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class sf5_arrays : MonoBehaviour {

    public GameObject sphere;
    public float speedX = 0.01f;
    public Color color;
    public int numSpheres = 4;

    private Renderer ren;
    private List<GameObject> spheres;
    private List<float> speedXList;

    private void Awake() {
        ren = sphere.GetComponent<Renderer>();
    }

    private void Start() {
        spheres = new List<GameObject>();
        speedXList = new List<float>();
        for (int i = 0; i < numSpheres; i++) {
            spheres.Add(Instantiate(sphere, new Vector3(0f, i * 1f, 0f), Quaternion.identity));
            speedXList.Add(Random.Range(speedX/2f, speedX*2f));
        }
    }

    private void Update() {
        moveSpheres();
        ren.sharedMaterial.SetColor("_Color", color);
    }

    private void moveSpheres() {
        for (int i = 0; i < spheres.Count; i++) {
            spheres[i].transform.Translate(speedXList[i], 0f, 0f);
            Vector3 screenPos = Camera.main.WorldToScreenPoint(spheres[i].transform.position);
            if (screenPos.x < 0f || screenPos.x > Screen.width) {
                speedXList[i] *= -1f;
            }
        }
    }

}
